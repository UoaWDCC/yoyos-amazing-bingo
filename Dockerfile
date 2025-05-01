# syntax = docker/dockerfile:1

# Adjust NODE_VERSION as desired
ARG NODE_VERSION=20.18.1
FROM node:${NODE_VERSION}-slim as base

LABEL fly_launch_runtime="Next.js"

# Next.js app lives here
WORKDIR /app

# Set production environment
ENV NODE_ENV="production"

# Install pnpm
ARG PNPM_VERSION=10.6.1
RUN npm install -g pnpm@$PNPM_VERSION


# Throw-away build stage to reduce size of final image
FROM base as build

# Install packages needed to build node modules
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential node-gyp pkg-config python-is-python3

# Install node modules
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod=false

# Copy application code
COPY . .

# Build application
RUN --mount=type=secret,id=DB_URL \
    --mount=type=secret,id=COOKIE_SECRET \
    --mount=type=secret,id=APP_URL \
    --mount=type=secret,id=ADMIN_ID \
    --mount=type=secret,id=ADMIN_CODE \
    DB_URL="$(cat /run/secrets/DB_URL)" \
    COOKIE_SECRET="$(cat /run/secrets/COOKIE_SECRET)" \
    APP_URL="$(cat /run/secrets/APP_URL)" \
    ADMIN_ID="$(cat /run/secrets/ADMIN_ID)" \
    ADMIN_CODE="$(cat /run/secrets/ADMIN_CODE)" \
    pnpm run build

# Remove development dependencies
RUN pnpm prune --prod


# Final stage for app image
FROM base

# Copy built application
COPY --from=build /app /app

# Print the final image file structure
RUN apt-get update -qq && \
    apt-get install tree
RUN tree -I "node_modules"

# Start the server by default, this can be overwritten at runtime
EXPOSE 3000
CMD [ "pnpm", "run", "start" ]

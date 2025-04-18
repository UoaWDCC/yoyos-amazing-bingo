import {
  boolean,
  integer,
  pgTable,
  primaryKey,
  varchar,
} from "drizzle-orm/pg-core";

export const teamsTable = pgTable("teams", {
  id: varchar({ length: 36 }).primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  code: varchar({ length: 20 }).notNull(),
});

/** A single square in the board */
export const squaresTable = pgTable(
  "squares",
  {
    teamId: varchar("team_id", { length: 36 })
      .notNull()
      .references(() => teamsTable.id),
    x: integer().notNull(),
    y: integer().notNull(),
    completed: boolean().notNull().default(false),
  },
  (table) => [primaryKey({ columns: [table.teamId, table.x, table.y] })],
);

export const activitiesTable = pgTable("activities", {
  id: varchar({ length: 36 }).primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  slug: varchar({ length: 255 }).notNull(),
  points: integer().notNull().default(0),
  x: integer().notNull(),
  y: integer().notNull(),
});

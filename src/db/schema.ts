import { relations } from "drizzle-orm";
import {
  boolean,
  integer,
  pgTable,
  primaryKey,
  text,
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

    completed: boolean().notNull().default(false),
    activityId: varchar("activity_id", { length: 36 }),
  },
  (table) => [primaryKey({ columns: [table.teamId, table.activityId] })],
);

export const activitiesTable = pgTable("activities", {
  id: varchar({ length: 36 }).primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  slug: varchar({ length: 255 }).notNull(),
  points: integer().notNull().default(1),
  description: text().notNull(),
  x: integer().notNull(),
  y: integer().notNull(),
});

export const squareRelations = relations(activitiesTable, ({ many }) => ({
  squaresTable: many(squaresTable),
}));

export const activitiesRelations = relations(squaresTable, ({ one }) => ({
  activity: one(activitiesTable, {
    fields: [squaresTable.activityId],
    references: [activitiesTable.id],
  }),
}));

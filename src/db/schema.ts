import { relations } from "drizzle-orm";
import {
  boolean,
  integer,
  pgTable,
  primaryKey,
  text,
  varchar,
} from "drizzle-orm/pg-core";

// --- TABLES ---

/** A team in the game */
export const teamsTable = pgTable("teams", {
  id: varchar({ length: 255 }).primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  code: varchar({ length: 6 }).notNull().unique(),
  specialActivity: integer("special_activity").notNull(),
});

/** Global activities (e.g. description etc) */
export const activitiesTable = pgTable("activities", {
  id: varchar({ length: 255 }).primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  code: varchar({ length: 6 }).notNull().unique(),
  cardImageName: varchar("card_image_name", { length: 255 }).notNull(),
  description: text().notNull(),
  basePoints: integer().notNull().default(1),
  boardOrder: integer("board_order").notNull(),
});

/** A team-specific activity (e.g. have they completed it yet etc) */
export const teamActivitiesTable = pgTable(
  "team_activities",
  {
    teamId: varchar("team_id", { length: 255 }).notNull(),
    activityId: varchar("activity_id", { length: 255 }).notNull(),
    isCompleted: boolean("is_completed").notNull().default(false),
  },
  (table) => [primaryKey({ columns: [table.teamId, table.activityId] })],
);

// --- RELATIONS ---
// Team <1---N> Team Activities <N---1> Activities

export const teamActivitiesRelations = relations(
  teamActivitiesTable,
  ({ one }) => ({
    team: one(teamsTable, {
      fields: [teamActivitiesTable.teamId],
      references: [teamsTable.id],
    }),
    activity: one(activitiesTable, {
      fields: [teamActivitiesTable.activityId],
      references: [activitiesTable.id],
    }),
  }),
);

export const teamsRelations = relations(teamsTable, ({ many }) => ({
  teamActivity: many(teamActivitiesTable),
}));

export const activitiesRelations = relations(activitiesTable, ({ many }) => ({
  teamActivity: many(teamActivitiesTable),
}));

import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import { pgTable, serial, text } from 'drizzle-orm/pg-core';

export const LocationsTable = pgTable('locations', {
  id: serial('id').primaryKey(),
  latitude: text('latitude').notNull(),
  longitude: text('longitude ').notNull(),
});

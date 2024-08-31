import '@/drizzle/envConfig';
import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import * as schema from './schema';

export const db = drizzle(sql, { schema });

export const addLocation = async (latitude: string, longitude: string) => {
  return await db.insert(schema.LocationsTable).values({ latitude, longitude });
};

export const getLocations = async () => {
  const locations = await db.query.LocationsTable.findMany();
  return locations;
};

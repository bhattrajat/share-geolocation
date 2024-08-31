import '@/drizzle/envConfig';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/drizzle/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
    user: process.env.POSTGRES_USER!,
    database: process.env.POSTGRES_DATABASE!,
    password: process.env.POSTGRES_PASSWORD!,
    host: process.env.POSTGRES_HOST!,
  },
});

import { addLocation, getLocations } from '@/drizzle/db';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const locations = await getLocations();
  return NextResponse.json(locations);
}

export async function POST(request: Request) {
  const data = await request.json();
  await addLocation(data.latitude, data.longitude);
  return NextResponse.json({ success: true });
}

import { NextResponse } from 'next/server';
import { client } from '../../../sanity/lib/client';

// Fetch all sales
export async function GET() {
  const sales = await client.fetch('*[_type == "order"]');
  return NextResponse.json(sales);
}

// Add a new sale
export async function POST(request: Request) {
  const newSale = await request.json();
  await client.create({
    _type: 'order',
    ...newSale,
  });
  return NextResponse.json({ message: 'Sale created successfully!' });
}

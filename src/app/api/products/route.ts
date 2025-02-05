import { NextResponse } from 'next/server';
import { client } from '../../../sanity/lib/client';

// Fetch all products
export async function GET() {
  const products = await client.fetch('*[_type == "product"]');
  return NextResponse.json(products);
}

// Add a new product
export async function POST(request: Request) {
  const newProduct = await request.json();
  await client.create({
    _type: 'product',
    ...newProduct,
  });
  return NextResponse.json({ message: 'Product created successfully!' });
}

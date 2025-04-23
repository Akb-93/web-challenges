import dbConnect from '@/db/connect';
import Product from '@/db/models/Product';

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === 'GET') {
    try {
      const products = await Product.find();
      response.status(200).json(products);
    } catch (error) {
      console.error('Error fetching products:', error);
      response.status(500).json({ error: 'Failed to fetch products' });
    }
  } else {
    response.status(405).json({ error: `Method ${request.method} Not Allowed` });
  }
}
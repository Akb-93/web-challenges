import { getProductById } from "@/services/productServices";

export default function handler(req, res) {
  const { id } = req.query; // Destructure 'id' from the query object
  if (req.method === 'GET') {
    const product = getProductById(id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
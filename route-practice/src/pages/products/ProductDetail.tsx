import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Product {
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

const ProductDetail: React.FC = () => {
  const { id } = useParams();

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <img src={product.thumbnail} alt={product.title} />
    </div>
  );
};

export default ProductDetail;

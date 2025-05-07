import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const ProductsList: React.FC = () => {
  interface Product {
    id: number;
    title: string;
  }

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products && products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsList
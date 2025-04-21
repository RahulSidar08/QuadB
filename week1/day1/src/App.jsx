import React from 'react';
import Product from './components/Product';

const products = [
  { name: "Laptop", price: "100k", status: "In Stock" },
  { name: "Headphones", price: "5k", status: "Out of Stock" },
  { name: "Smartphone", price: "50k", status: "In Stock" }
];

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center my-6">Available Products</h1>
      <div className="flex flex-col items-center space-y-4">
        {products.map((item, index) => (
          <Product 
            key={index}
            name={item.name}
            price={item.price}
            status={item.status}
          />
        ))}
      </div>
    </>
  );
}

export default App;

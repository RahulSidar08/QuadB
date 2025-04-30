import React from 'react';
import ProductCard from './ProductCard';
import { useSelector } from 'react-redux';

const ProductList = ({ propProducts }) => {
  const reduxProducts = useSelector((state) => state.product.products);

  return (
    <div className="p-6 space-y-8">
      <div>
        <h2 className="text-xl font-semibold mb-4 text-blue-600">Prop Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {propProducts?.length > 0 ? (
            propProducts.map(item => (
              <ProductCard key={item.id} name={item.name} price={item.price} />
            ))
          ) : (
            <p className="text-gray-500 col-span-full">No products passed as props.</p>
          )}
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4 text-green-600">Redux Store Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {reduxProducts?.length > 0 ? (
            reduxProducts.map(product => (
              <ProductCard key={product.id} name={product.name} price={product.price} />
            ))
          ) : (
            <p className="text-gray-500 col-span-full">No products in Redux store.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;

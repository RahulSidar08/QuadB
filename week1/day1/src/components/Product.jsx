import React from 'react';

function Product({ name, price, status }) {
  return (
    <>
      <div className="w-72 bg-white shadow-md rounded-xl p-4 border">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600 mt-1">Price: <span className="font-medium">{price}</span></p>
        <p className="mt-2">
          Status: 
          <span className={`ml-2 font-medium ${status === "In Stock" ? "text-green-600" : "text-red-600"}`}>
            {status}
          </span>
        </p>
      </div>
    </>
  );
}

export default Product;

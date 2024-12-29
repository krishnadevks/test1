import React from 'react';

const ProductListComponent = () => {
  const products = [
    { id: 1, name: 'Product 1', price: '$10' },
    { id: 2, name: 'Product 2', price: '$20' },
    { id: 3, name: 'Product 3', price: '$30' },
    { id: 4, name: 'Product 4', price: '$40' },
    { id: 5, name: 'Product 5', price: '$50' },
    { id: 6, name: 'Product 6', price: '$60' },
    { id: 7, name: 'Product 7', price: '$70' },
    { id: 8, name: 'Product 8', price: '$80' },
    { id: 9, name: 'Product 9', price: '$90' },
    { id: 10, name: 'Product 10', price: '$100' },
  ];

  return (
    <div>
      <h3 className="text-secondary">Product List</h3>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-6 col-lg-4 mb-4" key={product.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListComponent;

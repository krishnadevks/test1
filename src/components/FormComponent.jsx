import React from 'react';

const FormComponent = () => {
  return (
    <div>
      <h3 className="text-secondary">Add Product</h3>
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="productName" className="form-label">Product Name</label>
          <input type="text" className="form-control" id="productName" placeholder="Enter product name" />
        </div>
        <div className="col-md-6">
          <label htmlFor="category" className="form-label">Category</label>
          <input type="text" className="form-control" id="category" placeholder="Enter category" />
        </div>
        <div className="col-md-6">
          <label htmlFor="price" className="form-label">Price</label>
          <input type="number" className="form-control" id="price" placeholder="Enter price" />
        </div>
        <div className="col-md-6">
          <label htmlFor="manufacturingDate" className="form-label">Manufacturing Date</label>
          <input type="date" className="form-control" id="manufacturingDate" />
        </div>
        <div className="col-md-6">
          <label htmlFor="expiry" className="form-label">Expiry Date</label>
          <input type="date" className="form-control" id="expiry" />
        </div>
        <div className="col-md-6">
          <label htmlFor="manufacturer" className="form-label">Manufacturer Name</label>
          <input type="text" className="form-control" id="manufacturer" placeholder="Enter manufacturer name" />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;

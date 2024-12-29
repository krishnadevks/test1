import React from 'react';

const SearchComponent = () => {
  return (
    <div>
      <h3 className="text-secondary">Search Product</h3>
      <form className="row g-3">
        <div className="col-md-10">
          <label htmlFor="searchProduct" className="form-label">Search by Product Name</label>
          <input type="text" className="form-control" id="searchProduct" placeholder="Enter product name" />
        </div>
        <div className="col-md-2 d-flex align-items-end">
          <button type="submit" className="btn btn-warning w-100">Search</button>
        </div>
      </form>
    </div>
  );
};

export default SearchComponent;

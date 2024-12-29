import React from "react";
import FormComponent from "./components/FormComponent";
import SearchComponent from "./components/SearchComponent";
import ProductListComponent from "./components/ProductListComponent";

const App = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center text-primary mb-4">Product App</h1>
      <FormComponent />
      <hr />
      <SearchComponent />
      <hr />
      <ProductListComponent />
    </div>
  );
};

export default App;

import React from "react";
// import "./AddProduct.css";

const UpdateProduct = () => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [company, setCompany] = React.useState("");

  const updateProduct = async () => {
    console.warn(name, price, category, company);
  };

  return (
    <div className="product">
      <h1> Update Product</h1>
      <input
        type="text"
        placeholder="Enter product name"
        className="productBox"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <input
        type="text"
        placeholder="Enter product price"
        className="productBox"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />

      <input
        type="text"
        placeholder="Enter product category"
        className="productBox"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      />

      <input
        type="text"
        placeholder="Enter product company"
        className="productBox"
        value={company}
        onChange={(e) => {
          setCompany(e.target.value);
        }}
      />

      <button onClick={updateProduct} className="productButton">
        Update Product
      </button>
    </div>
  );
};

export default UpdateProduct;

import React, { useEffect } from "react";
import { useParams, useNavigate} from "react-router-dom";
// import "./AddProduct.css";

const UpdateProduct = () => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [message, setMessage] = React.useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProductDetails();
  }, [params.id]);

  const getProductDetails = async () => {
    console.warn(params);
    let result = await fetch(
      `http://localhost:5000/product/updateProduct/${params.id}`
    );
    result = await result.json();
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setCompany(result.company);
  };

  const updateProduct = async () => {
    console.warn(name, price, category, company);
    let result = await fetch(`http://localhost:5000/product/updateOne/${params.id}`, {
      method: "Put",
      body: JSON.stringify({ name, price, category, company }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    
    if (result) {
      setMessage("Product has beenm Updated Successfully");
    }
    navigate('/')
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

      {message && <div style={{ color: "green", marginBottom: "10px" }}>{message}</div>}

    </div>
  );
};

export default UpdateProduct;

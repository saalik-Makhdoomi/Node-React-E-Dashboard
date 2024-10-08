import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import "./ProductList.css";

const ProductList = () => {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/product/getAllProducts");
    result = await result.json();
    setProducts(result);
  };
  // console.log("products", Products);

  // Delete Product API:

  const deleteProduct = async (productId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/product/delete/${productId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete the product");
      }

      const result = await response.json();
      console.log("Product deleted successfully:", result);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };


  // Search Product API:
  
  const searchHandle = async (event)=> {
    
    let key = event.target.value;
    let result = await fetch (`http://localhost:5000/search/${key}`);
    result = await result.json();
    if (result) {
      setProducts(result)
    }
  }

  return (
    <div className="Product-list">
      <h3>Product List</h3>
      <input type="text" className='search-product-box' placeholder="Search Product"  
      onChange={searchHandle}
      />
      <ul>
        <li>S. NO</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Operation</li>
      </ul>
      {Products.map((item, index) => (
        <ul key={item._id}>
          <li>{index + 1}</li>
          <li>{item.name}</li>
          <li>$ {item.price}</li>
          <li>{item.category}</li>
          <li>
            <button
              className="deleteButton"
              onClick={() => deleteProduct(item._id)}
            >
              {" "}
              Delete{" "}
            </button>
            <Link to={"/update/"+item._id}> Update </Link>
          </li>
        </ul>
      ))}
    </div>
  );
};
export default ProductList;

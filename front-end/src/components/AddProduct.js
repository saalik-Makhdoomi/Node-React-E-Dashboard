import React from "react";
import "./AddProduct.css";

const AddProduct =() => {
    const [name, setName]= React.useState('');
    const [price, setPrice]= React.useState('');
    const [category, setCategory]= React.useState('');
    const [company, setCompany]= React.useState('');
    const addProduct = async ()=>{
        console.log(name, price, category, company);
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = fetch("http://localhost:5000/product/add-product",{
            method:'post',
            body:JSON.stringify({name, price, category, company, userId}),
            headers:{
                "content-Type":"application/json"
            }
        });
        result = (await result).json();
        console.log(result);
        
        // console.log(userId._id);
        
        
    }


    return(
        <div className="product">
            <h1>Add Product</h1>
            <input type="text" placeholder="Enter product name"  className="productBox"
            value={name} onChange={(e)=>{setName(e.target.value)}}  
            />
            <input type="text" placeholder="Enter product price" className="productBox"  
            value={price} onChange={(e)=>{setPrice(e.target.value)}} 
            />
            <input type="text" placeholder="Enter product category" className="productBox"  
            value={category} onChange={(e)=>{setCategory(e.target.value)}} 
            />
            <input type="text" placeholder="Enter product company" className="productBox" 
            value={company} onChange={(e)=>{setCompany(e.target.value)}} 
            />
            <button onClick={addProduct} className="productButton">Add Product</button>
        </div>
    )
}

export default AddProduct;
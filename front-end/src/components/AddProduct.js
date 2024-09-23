import React from "react";
import "./AddProduct.css";

const AddProduct =() => {
    const [name, setName]= React.useState('');
    const [price, setPrice]= React.useState('');
    const [category, setCategory]= React.useState('');
    const [company, setCompany]= React.useState('');
    const [error, setError]= React.useState(false);

    const addProduct = async ()=>{

        console.warn(!name);
        if(!name || !price || !category || !company)
        {
            setError(true)
            return false;
        } 
      
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
            {error && !name &&  <span className="invalid-input">Enter valid Name</span>}

            <input type="text" placeholder="Enter product price" className="productBox"  
            value={price} onChange={(e)=>{setPrice(e.target.value)}} 
            />
            {error && !price &&  <span className="invalid-input">Enter valid Price</span>}

            <input type="text" placeholder="Enter product category" className="productBox"  
            value={category} onChange={(e)=>{setCategory(e.target.value)}} 
            />
            {error && !category &&  <span className="invalid-input">Enter valid Category</span>}

            <input type="text" placeholder="Enter product company" className="productBox" 
            value={company} onChange={(e)=>{setCompany(e.target.value)}} 
            />
            {error && !company &&  <span className="invalid-input">Enter valid Company</span>}

            <button onClick={addProduct} className="productButton">Add Product</button>
        </div>
    )
}

export default AddProduct;
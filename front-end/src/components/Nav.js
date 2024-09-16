import React, {} from "react";
import { Link, useNavigate
    } from "react-router-dom";
import "./Nav.css";
const Nav=()=>{
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();


    const logout =()=>{
       localStorage.clear();
       navigate('/signup')
    }


     return(
        <div>
            <img
            alt="logo"
            className="logo"
            src = "https://barn2.com/wp-content/uploads/2023/01/How-to-add-WooCommerce-coupon-field-to-your-checkout.png" />
            {auth ? < ul className="nav-ul">
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Products</Link></li>
                <li><Link to="/update">Update Products</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li> <Link onClick={logout} to="/signup">Logout ({JSON.parse(auth).name})</Link></li>

                {/* <li> { auth ? <Link onClick={logout} to="/signup">Logout </Link> :
                <Link to="/signup">SignUp</Link>}</li>
                <li><Link to="/login">Login</Link></li> */}

            </ul>
                :
            <ul className="nav-ul nav-right">
                <li><Link to="/signup">SignUp</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
            }
        </div>
    )
}

export default Nav;
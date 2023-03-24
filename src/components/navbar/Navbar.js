/** @format */

import "./Navbar.css";
import 'bulma/css/bulma.min.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (



    <nav className="navbar">
        
    <nav className="navbar">
       <div className="nav">
           <img src="default.svg" className="brand-logo" alt=""/>
           <div className="nav-items">
               <div className="search">
                   <input type="text" className="search-box" placeholder="search brand, product"/>
                   <button className="search-btn">search</button>
               </div>
               <a href="/account"><img src="User.jpg" alt=""/></a>
               <a href="/cart"><img src="cart.jpg" alt=""/></a>
        
           </div>
       </div>
       </nav>



<noscript>You need to enable JavaScript to run this app.</noscript>
<div id="root">

</div>
<ul className="links-container">
<li className="link-item"><a href="/" className="link">Home</a></li>

<li className="link-item"><a href="/product" className="link">Products</a></li>
<div className="dropdown">
<select className="link" onChange={(e) => { window.location.href = e.target.value }}>
  <option value="">Categories</option>
  <option value="/running">Running</option>
  <option value="/climbing">Climbing</option>
  <option value="/football">Football</option>
  <option value="/tennis">Tennis</option>
  <option value="/hiking">Hiking</option>
</select>

</div>
<li className="link-item"><a href="/about" className="link">About </a></li>
<li className="link-item"><a href="/contact" className="link">Contact</a></li>
<li> <NavLink className="link" to="/cart"> <FontAwesomeIcon icon={faCartShopping} /> </NavLink></li>
<li> <NavLink className="link" to="/account"> <FontAwesomeIcon icon={faUser} /> </NavLink></li>
</ul>

</nav>
  );
};

export default Navbar;

import React, { Fragment } from 'react';
import "./About.css";

import { NavLink } from 'react-router-dom';

function Index (){
    return( <Fragment>



  <section className="about-us">

  <h2>About Us</h2>
    The project involves the development of an e-commerce website for a company. 
    The stakeholders within the project are a company called Equip Footwear who specialise in retailing sports footwear. 
    The motivation for the project occurred as a result of the business rapid growth.

  <br/>
  The project involves the development of an e-commerce website for a company. 
  The stakeholders within the project are a company called Equip Footwear who specialise in retailing sports footwear. 
  The motivation for the project occurred as a result of the business rapid growth.
  <br/>
  The project involves the development of an e-commerce website for a company. 
  The stakeholders within the project are a company called Equip Footwear who specialise in retailing sports footwear. 
  The motivation for the project occurred as a result of the business rapid growth.





  <h2>EQUIP FOOTWEAR</h2>
</section>
  


<footer>
        <div className="footer-content">
        <label className="logo">
      <NavLink to="/">Equip Footwear </NavLink>
      <p className="footer-title">About company</p>
    <p className="info">
    The stakeholders within the project are a company called Equip Footwear who specialise in retailing sports footwear. 
   </p>
   
      
      </label>
            <div className="footer-ul-container">
                <ul className="category">
                    <li className="category-title">men/women</li>
                    <li><a href="/account" className="footer-link">Basketball shoe</a></li>
                    <li><a href="/account" className="footer-link">Football shoe</a></li>
                    <li><a href="/account" className="footer-link">Tennis shoe</a></li>
                    <li><a href="/account" className="footer-link">Running shoe</a></li>
                    <li><a href="/account" className="footer-link">walking shoe</a></li>
                    <li><a href="/account" className="footer-link">Hiking shoe</a></li>
                 
                </ul>
              
            </div>
        </div>
       
        <p className="info"> Emails us- equipfootwear@ecommerce.com</p>
    <p className="info">Telephone - 000 00 00 000, 000 00 00 000</p>
    <div className="footer-social-container">
        <div>
            <a href="/product" className="social-link">Terms & services</a>
            <a href="/product" className="social-link">privacy page</a>
        </div>
        <div>
            <a href="/product" className="social-link">Instagram</a>
            <a href="/product" className="social-link">Facebook</a>
            <a href="/product" className="social-link">Twitter</a>
        </div>
    </div>
    <p className="footer-credit">Shoping, Best apparels online store</p>
    </footer>



</Fragment>
    )
}
export default Index;
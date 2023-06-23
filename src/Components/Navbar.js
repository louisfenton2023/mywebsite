import React from "react";
import Logo from '../Photos/Logo.PNG'
import '../App.css'

export default function Navbar(){
    return(
        <div>
            
          <div className="logo">
                <img src={Logo} alt= 'logo'/>
               <input placeholder="Search Items here"/> 
               <img src={ require('../Photos/contacticon.PNG')} alt='contacticon'/>
               <img src={ require('../Photos/basketicon.PNG')} alt='basketicon'/>
          </div>
            
                
                <header className="Topnav">
                <a href='/Home'>Home</a> 
                <a href='/Offers'>Offers</a>
                <a href='/Mens'>Mens</a>
                <a href='/Womens'>Womens</a>
                <a href='/Kids'>Kids</a>
                <a href='/Accessories'>Accessories</a>
                <a href='/Contact'>Contact</a>
                <a href='/Basket'>Basket</a>

            </header>

        </div>
    )
}
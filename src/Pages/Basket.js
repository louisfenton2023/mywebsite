import React from "react";
import css from "./Basket.css"

export default function Basket () {
    return (
        <div>
          <header className= "Basket">
            <img src={ require('../Photos/basketicon.PNG')} alt='basketicon'/>
            <p>There is currently no items in your basket</p>
          </header>  
        </div>
    )
}
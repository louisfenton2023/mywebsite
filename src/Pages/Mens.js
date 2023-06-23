import React from "react";
import css from "./Mens.css"


export default function Mens () {
    return (
    <div className="Mens">
        <div>
             <body className='FirstRow'>
                 <img src={ require ('../images/MensImageOne.png')}alt="logo"/>
                 <img src={ require ('../images/MensImageTwo.png')}alt="logo"/>
                 <img src={ require ('../images/MensImageThree.png')}alt="logo"/>
                 <img src={ require ('../images/MensImageFour.png')}alt="logo"/>
             </body>

             <body className='SecondRow'>
                <img src={ require ('../images/MensImageFive.png')}alt="logo"/>
                <img src={ require ('../images/MensImageSix.png')}alt="logo"/>
                <img src={ require ('../images/MensImageSeven.png')}alt="logo"/>
                <img src={ require ('../images/MensImageEight.png')}alt="logo"/>
            </body>
        </div>
    </div>
   )
}
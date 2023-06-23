import React from "react";
import css from "./Womens.css"

export default function Womens () {
    return (
        <div>
            <div className="Womens">
                <body className='Tops'>
                 <img src={ require ('../images/WomensImageOne.png')}alt="logo"/>
                 <img src={ require ('../images/WomensImageTwo.png')}alt="logo"/>
                 <img src={ require ('../images/WomensImageThree.png')}alt="logo"/>
                 <img src={ require ('../images/WomensImageFour.png')}alt="logo"/>
                </body>

                <body className='Sportswear'>
                 <img src={ require ('../images/WomensImageFive.png')}alt="logo"/>
                 <img src={ require ('../images/WomensImageSix.png')}alt="logo"/>
                 <img src={ require ('../images/WomensImageSeven.png')}alt="logo"/>
                 <img src={ require ('../images/WomensImageEight.png')}alt="logo"/>
                </body>
            </div>
            
        </div>
    )
}
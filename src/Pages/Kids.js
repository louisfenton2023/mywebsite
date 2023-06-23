import React from "react";
import css from "./Kids.css"


export default function Kids () {
    return (
       <div>
        <div className="Kids">
            <body className='firstcolum'>
                 <img src={ require ('../images/KidsImageOne.png')}alt="logo"/>
                 <img src={ require ('../images/KidsImageTwo.png')}alt="logo"/>
                 <img src={ require ('../images/KidsImageThree.png')}alt="logo"/>
                 <img src={ require ('../images/KidsImageFour.png')}alt="logo"/>
             </body>

             <body className='secondcolum'>
                <img src={ require ('../images/KidsImageFive.png')}alt="logo"/>
                <img src={ require ('../images/KidsImageSix.png')}alt="logo"/>
                <img src={ require ('../images/KidsImageSeven.png')}alt="logo"/>
                <img src={ require ('../images/KidsImageEight.png')}alt="logo"/>
            </body>
          </div>
        </div> 
    )
}
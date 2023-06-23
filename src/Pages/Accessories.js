import React from "react"
import css from "./Accessories.css"

export default function Accessories () {
    return (
        <div>
         <div className="Accessories">
            <body className='content'>
                 <img src={ require ('../images/AccessoriesImageOne.png')}alt="logo"/>
                 <img src={ require ('../images/AccessoriesImageTwo.png')}alt="logo"/>
                 <img src={ require ('../images/AccessoriesImageThree.png')}alt="logo"/>
                 <img src={ require ('../images/AccessoriesImageFour.png')}alt="logo"/>
             </body>

             <body className='pictures'>
                <img src={ require ('../images/AccessoriesImageFive.png')}alt="logo"/>
                <img src={ require ('../images/AccessoriesImageSix.png')}alt="logo"/>
                <img src={ require ('../images/AccessoriesImageSeven.png')}alt="logo"/>
                <img src={ require ('../images/AccessoriesImageEight.png')}alt="logo"/>
            </body>
          </div>
            
        </div>
    )
}

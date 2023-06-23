import React from "react";
import  "./Offers.css";

export default function Offers () {
    return (
    <div className="Offers">
        <div>
           <body className='content'>
             <img src={ require ('../images/OffersImageOne.png')}alt="logo"/>
             <img src={ require ('../images/OffersImagetwo.png')}alt="logo"/>
             <img src={ require ('../images/OffersImageThree.png')}alt="logo"/>
             <img src={ require ('../images/OffersImageFour.png')}alt="logo"/>
            </body>

            <body className='pictures'>
             <img src={ require ('../images/OffersImageFive.png')}alt="logo"/>
             <img src={ require ('../images/OffersImagesix.png')}alt="logo"/>
             <img src={ require ('../images/OffersImageSeven.png')}alt="logo"/>
             <img src={ require ('../images/OffersImageEight.png')}alt="logo"/>
            </body>
          </div>
        </div>
    )
}
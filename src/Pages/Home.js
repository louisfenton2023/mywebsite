import React from "react";
import css from "./Home.css";

export default function Home(){
    return(
        <div className="Home">
            <body className='PopularItems'>
             <img src={ require ('../images/homepageimage.PNG')}alt="logo"/>
             <img src={ require ('../images/homepagesecondimage.PNG')}alt="logo"/>
             <img src={ require ('../images/homepagethirdimage.PNG')}alt="logo"/>
             <img src={ require ('../images/homepagefourthimage.PNG')}alt="logo"/>
            </body>

            <body className='TrendingItems'>
             <img src={ require ('../images/homepagefifthimage.PNG')}alt="logo"/>
             <img src={ require ('../images/homepagesixthimage.PNG')}alt="logo"/>
             <img src={ require ('../images/homepageseventhimage.PNG')}alt="logo"/>
             <img src={ require ('../images/homepageeightimage.PNG')}alt="logo"/>
            </body>
        </div>
    )
}
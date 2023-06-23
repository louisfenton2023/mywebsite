import React from "react";
import css from "./Contact.css"

export default function Contact () {
    return (
<div>
        <div className="Feedbackform">
       
       <div className="First">
         <label for="Email"><b>First Name</b></label>
         <input type="Email" placeholder="first Name" name="FirstName" required/>
       </div>


       <div className="Email">
           <label for="Email"><b>Email</b></label>
           <input type="text" placeholder="Enter Email" name="email" required/>
       </div>
       
       <div className="Telephone">
           <label for="Telephone"><b>Telephone</b></label>
           <input type="text" placeholder="0675843342" name="Telephone" required/>
       </div>
      
       <div className="Feedback">
            <label for="Feedback"><b>Feedback</b></label>
            <input for="Feedback" placeholder="Feedback on Websie" name="Feedback" required/>
       </div>

       <div className="WebsiteRating"/>
          <label for="Website Rating"><b>Website Rating</b></label>
          <input type="text" placeholder="What would you rate the website out of 10" name="website rating" required/>
          <button><span><a href="./">Submit</a></span></button>
       </div>
     </div> 
    )
}
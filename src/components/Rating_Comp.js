import React, {useState} from 'react'
import Thanks_Comp from './Thanks_Comp';
import { FaStar } from "react-icons/fa";

import star from "../assets/star-64.png";



function Rating_Comp() {

  
  const[value, setValue] = useState(0);
  const [rating,setRating] = useState(null);
  const [hover,setHover] = useState(null)


     
  return (
    <div>
      <div className="card">
        <div className="cardcontent">
          <img className="icon" alt="star img" src={star} />
          <h2>How do we do? </h2>
          <p>
            Please let us know how we did with your support request. All
            Feedback is appreciated to help us improve our offering!
          </p>


      {[...Array(5)].map((star, iterator)=>{

        const ratingVal = iterator+1;

        return (
          
            <label key={iterator}>
              <input
                type="radio"
                name="rating"
                value={ratingVal}
                onClick={() => {
                  setRating(ratingVal);
                }}
                
              />
              <FaStar
                className="star"
                color={ratingVal <= (hover || rating) ? "#ffc107 " : "#e4e5e9"}
              onMouseEnter={()=>setHover(ratingVal)}
                onMouseLeave = {()=>setHover(null)}></FaStar>
            </label>
          
        );

      })}


        </div>
        
          <button
            className="submitbtn"
            onClick={() => {
              ;
            }}
          >
            Submit
          </button>
        
      </div>

      <div>
        
          <Thanks_Comp rate={value} message="HOLAAA"></Thanks_Comp>
  
      </div>
    </div>
  );
}

export default Rating_Comp;
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

import star from "../assets/star-64.png";
import ty from "../assets/thank-you.svg";

function RatingComp() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [submit, setSubmit] = useState(null);

  return (
    <div>
      {submit !== true ? (
        //if...
        <div className="card">
          <div className="cardcontent">
            <img className="icon" alt="star img" src={star} />
            <h2>How do we do? </h2>
            <p>
              Please let us know how we did with your support request. All
              Feedback is appreciated to help us improve our offering!
            </p>

            {/* stars */}
            {[...Array(5)].map((star, iterator) => {
              const ratingVal = iterator + 1;

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
                    color={
                      ratingVal <= (hover || rating) ? "#ffc107 " : "#e4e5e9"
                    }
                    onMouseEnter={() => setHover(ratingVal)}
                    onMouseLeave={() => setHover(null)}
                  ></FaStar>
                </label>
              );
            })}
          </div>
          <button
            className="submitbtn"
            onClick={() => {
              setSubmit(true);
            }}
          >
            Submit
          </button>
        </div>
      ) : (
        // else
        <div className="card">
          <div className="cardcontent2">
            <img className="icon" alt="ty img" src={ty} />

            <div id="count">you selected {rating} out of 5</div>
            <h2>Thank you! </h2>
            <p>
              We appreciate you taking the time to give a rating. if you ever
              need more support, don't hesitate to get in touch!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default RatingComp;

import React, {useState} from 'react'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Rating from "@mui/material/Rating";
import Thanks_Comp from './Thanks_Comp';

import star from "../assets/star-64.png";



function Rating_Comp() {

  const[value, setValue] = useState(0);
  const [show, setShow] = useState()


  function handle_click(ev){
    
    ev.preventDefault(); //prevent Default
    console.log(ev);

return (<Thanks_Comp></Thanks_Comp>)

  }

     
  return (
    <div>
      <Card className="card">
        <CardContent className="cardcontent">
          <img className='icon' alt="star img" src={star} />
          <h2>How do we do? </h2>
          <p>
            Please let us know how we did with your support request. All
            Feedback is appreciated to help us improve our offering!
          </p>

          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </CardContent>
        <CardActions>
          <button className="submitbtn" onClick={handle_click} >
            Submit
          </button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Rating_Comp;
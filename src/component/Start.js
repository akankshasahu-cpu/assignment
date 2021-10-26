import "../App.css";
import React,{useState, useEffect} from "react";

function Start( { isMiddle } ) {

  const [dogImage, setDogImage] = useState(null)

  // fetching data from API
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random/1")
    .then(response => response.json())
    .then(data => setDogImage(data.message))
  },[])

    return (
    <div  >
    {
    dogImage && dogImage.map((dog) => 
           <div className="col">
                <div className ="start">
                   <img src ={dog} alt="random" className="imag"/>
                 </div>
           </div>   
        )}   
    
       </div>
    );
}

export default Start;
import "../App.css";
import React,{useState, useEffect} from "react";

function End(  ) {
  
    const [dogImage, setDogImage] = useState(null)

    // fetching data from dog API
   
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
                <div className ="end">
                   <img  className="imag" src ={dog} alt="random"/>
                 </div>
           </div>   
        )}   
    
       </div>
    );
}

export default End;
import "./App.css";
import React,{useState, useEffect} from "react";
import Start from "./component/Start"
import Center from "./component/Center"
import End from "./component/End"
function App() {


    return (
         <div className = "App" >
             {/* component for diagonal  */}
           <Start/>
           <Center/>
           <End/>

       </div>
    );
}

export default App;
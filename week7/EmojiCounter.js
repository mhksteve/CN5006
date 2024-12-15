import React, {useState,useEffect} from "react";
import Love from "./Love.png";
import Sad from "./Sad.png";
import Like from "./Like.png";
import Happy from "./Happy.png";
import "./App.css";

function EmojiCounter(props) 
{
    
    const [pic, setPic] = useState(Love);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (props.pic === "Love") {
        setPic(Love);
        } else if (props.pic === "Sad") {
        setPic(Like);
        } else if (props.pic === "Like") {
        setPic(Sad);
        } else if (props.pic ==="Happy") {
        setPic(Happy);
       }}, [props.pic]);

       const ClickHandle = () => 
        {
            setCount(count + 1);
        };

        return (
            <div className = "App">
            <p>{props.pic}<span></span> 
            <button onClick={ClickHandle}>{count}<img src={pic} alt=""/></button>
            </p>
            </div>
           );
           
}
export default EmojiCounter;

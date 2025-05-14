import { useState, useEffect } from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
    // let btnName = "Light"; // normal js variable
    const [btnName, setBtnName] = useState("Light");
    

    
    // [] -> empty array dependency -> only once called when navbar render
    // 2nd Case: -> No Array dependency jab jab navbar render hoga tab apna useEffect bhi render hoga
    // 3rd case: jab hm array dependency ke andar kuch pass karte hai toh vo change hota hai to render hota hai
    useEffect(() => {
        // console.log("useEffect called");
    },[btnName]);
    return (
        <div className="navbar">
            <h1>LOGO</h1>
            <ul className="menu_items">
                <li><Link to="./men">MEN</Link></li>
                <li><a href = "/women">WOMEN</a></li>
                <li>KIDS</li>
                <li><Link to="/about">ABOUT</Link></li>
                <li>CART</li>
                <button onClick={() => {
                    btnName === "Light" ? setBtnName("Dark") : setBtnName("Light"); // btnName = "Dark";
                }}>{btnName}</button>
            </ul> 
        </div>
    );
};

export default Navbar; // default export
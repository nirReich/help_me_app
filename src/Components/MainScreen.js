import React from 'react'
import {Link } from "react-router-dom";

export default function MainScreen(props) {


    return (
        <div>
            <br />
            <Link to={`service${props.serviceNum}`}><button style={{ backgroundColor: "red", width: "200px", height: "200px", borderRadius: "100%" }}><h1 style={{ color: "white" }}>HELP!</h1></button></Link>

        </div>
    )
}

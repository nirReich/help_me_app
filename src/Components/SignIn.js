import React, { useState } from 'react'
import { Link } from "react-router-dom";

export default function SignIn(props) {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    let setTheName = (event) => {

        setName(event.target.value)
        if (name.length < 3) {
            document.getElementById("nameErorP").innerHTML = "name must be longer then 4 letters!"
        }
        else {
            document.getElementById("nameErorP").innerHTML = ""
        }

    }

    let setThePassword = (event) => {

        setPassword(event.target.value)

        if (password.length < 7) {
            document.getElementById("passErorP").innerHTML = "password must contain 8 letters with letters and numbers!"
        }
        else {
            document.getElementById("passErorP").innerHTML = ""
        }
    }

    return (
        <div>
            <h1>Help-Me App</h1>
            <div className="signinHeader">
                <h2>Sign In</h2>
            </div>
            <br />
            <p>Full Name</p>
            <p id="nameErorP" style={{ color: "red" }}></p>
            <input type="text" placeholder="Full Name" onChange={setTheName} />
            <br />
            <p>Password</p>
            <p id="passErorP" style={{ color: "red" }}></p>
            <input type="text" placeholder="Password" onChange={setThePassword} />
            <br />
            <br />
            <Link to={`/mainpage ${name}`}><button onClick={() => { props.setNameProp(name, password) }}>Sign In</button></Link>

        </div>
    )
}

import React, { useState } from 'react'

export default function Abort(props) {

    const [passWord1, setPassword1] = useState('');
    const [passWord2, setPassword2] = useState('');
    const [counter, setCounter] = useState(0);

    let insertPassword1 = (element) => {
        setPassword1(element.target.value);
    }

    let insertPassword2 = (element) => {
        setPassword2(element.target.value);
    }

    const validPassword = (e) => {

        if (counter === 2) {
            document.getElementById('abortBtn').disabled = true;
        }
        else if (passWord1 !== passWord2 || passWord1 !== props.password) {
            setCounter(counter + 1)
            alert('Password Incorect!')
        }
        else {
            alert('Call Aborted!')
        }
    }



    return (
        <div>
            <h1>{props.serviceNum}</h1>
            <input type="text" placeholder="Type Password" onChange={insertPassword1} />
            <br />
            <input type="text" placeholder="Type Password Again" onChange={insertPassword2} />
            <br />
            <button id='abortBtn' onClick={() => { validPassword() }}>Abort</button>
        </div>
    )
}

import React,{useState} from 'react'
import Abort from './Abort'

export default function Help(props) {

    const [flag,setFlag]=useState(false)

    const changeFlag=()=>{
        setFlag(!flag)
    }

    let showAbort=()=>{
        
        if (flag===false) {
            return <button onClick={changeFlag}>Abort</button>
        }
        else{
            return <Abort password={props.password}/>
        }
    }

    return (

        <div>
            <h1>{props.serviceNum}</h1>
            <br/>
            <h2>{props.serviceNum}</h2>
            <br />
            <br />
            <h2>{props.fullName}</h2>
            <br />
            <br />
            {showAbort()}
        </div>
    )
}

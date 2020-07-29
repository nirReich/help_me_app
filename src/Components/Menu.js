import React from 'react'

export default function Menu(props) {


    return (
        <div className="menuDiv">

            <table>
                <td> <h1>{props.service}</h1></td>
                <td>
                    <select name="seviceSelect" id="seviceSelect" onChange={props.setTheHeader}>
                        <option value="101">Service Number</option>
                        <option value="101">101 MADA</option>
                        <option value="100">100 Police</option>
                        <option value="102">102 Fire Dep</option>

                    </select>
                </td>
            </table>


        </div>
    )
}

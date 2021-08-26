import React from 'react'
import "../styles/watchreview.css"

export default function Watchreview({ records }) {
    return (
        <div className="watchreview">
                {records.length === 0 ? <div>No Reviews Yet</div> : 
                <div className="reviewbox1">
                    {records.map((e,i) => {return <div className="minibox" key={i}><div><b>Review {i+1}: </b> </div><b>Your name is :</b>{e.username} <br /><b>Your phone no is :</b>{e.email} <br /><b>Your experience :</b> {e.phoneno} <br /><b>Your rewiew :</b> {e.password}</div> })}
                </div>}    
        </div>
    )
}

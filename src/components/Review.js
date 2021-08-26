import "../styles/review.css"
import { Link } from "react-router-dom"
import React from 'react'


export default function Review({handleInput, handlesubmit, records, user}) {

  return (
    <div className="reviewdiv">
      <form action="" className="form">
        <div className="form1">
          <label htmlFor="username">User Name</label> <br />
          <input type="text"
            name="username"
            autoComplete="off"
            value={user.username}
            onInput={handleInput}
            id="username" />
        </div>
        <div className="form1">
          <label htmlFor="email">Phone No</label> <br />
          <input type="text"
            name="email"
            autoComplete="off"
            value={user.email}
            onInput={handleInput}
            id="email" />
        </div>
        <div className="form1">
          <label htmlFor="phoneno">Your Experience</label> <br />
          <input type="text"
            name="phoneno"
            autoComplete="off"
            value={user.phoneno}
            onInput={handleInput}
            id="phoneno" />
        </div>
        <div className="form2">
          <label htmlFor="password">Review</label> <br />
          <input type="text"
            name="password"
            autoComplete="off"
            value={user.password}
            onInput={handleInput}
            id="password" />
        </div>
        <br />
        <button onClick={handlesubmit}>Submit</button>
        <div className="review"><Link className="review" to="/watchreview" >Your Reviews Here</Link></div>
      </form>
    </div>
  )
}

import React, { useState } from 'react'
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer";
import Services from "./components/Services";
import Review from "./components/Review";
import Watchreview from "./components/Watchreview"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";


export default function App() {
  const [user, setUser] = useState(
    {
      username: "",
      email: "",
      phoneno: "",
      password: ""

    })
  const [records, setRecords] = useState([])
  const handlesubmit = (e) => {
    e.preventDefault()
    if (user.username !== "" && user.email !== "" && user.phoneno !== "" && user.password !== "") {

      setRecords([...records, user])

    }
    else {
      alert("fields cant be empty")
    }
    setUser({ ...user, ...{ username: "", email: "", phoneno: "", password: "" } })
  }

  const handleInput = (e) => {
    let name = e.target.name
    let value = e.target.value
    // console.log(name, value)
    //her we are over-writing user elements 
    setUser({ ...user, [name]: value })


  }

  return (
    <>
      <Router>
        <Header />
         <Switch>
              <Route exact path="/" >
                <Main />
              </Route>
              <Route exact path="/services" >
                <Services />
              </Route>
              <Route exact path="/review">
                <Review handleInput={handleInput} handlesubmit={handlesubmit} records={records} user={user} />
              </Route>
              <Route exact path="/watchreview" >
                <Watchreview records={records} />
              </Route>
              <Redirect to="/"/>
            </Switch>
        <Footer />
      </Router>
    </>
  )
}

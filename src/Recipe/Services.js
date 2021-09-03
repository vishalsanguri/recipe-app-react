import React, { useCallback, useState } from 'react'
import "./services.css"
import Axios from "axios"





// https://api.edamam.com/search?q=paneer&app_id=f23a3dca&app_key=018c53f724a68d3fa65863d8dfb9482b






export default function Services() {
    const [myarray, setMyarray] = useState([])
    const [input, setInput] = useState("")
    const [render, setRender] = useState({use:""})
    const APP_ID = "f23a3dca"
    const APP_KEY = "018c53f724a68d3fa65863d8dfb9482b"
    const getdata = useCallback( async () => {
        let response = await Axios.get(`https://api.edamam.com/search?q=${input}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        let maindata = response.data
        let allhits = maindata.hits
        setMyarray(allhits)
        setRender({...render,...{use:input}})

    },[input,render])
    
    const setvalue = (e) => {
        setInput(e.target.value)
    }

    return (
        <>
            <div className="searchbox">
                <input className="inputbox" type="text" value={input} onChange={setvalue} placeholder="search here" />
                <button className="buttonbox" onClick={getdata}>search</button>
            </div>
            {render.use===""?
                <div className="empty">
                    <div className="quote"></div>
                    <div className="cards">
                        <div className="card1"></div>
                        <div className="card2"></div>
                        <div className="card3"></div>
                    </div>
                </div>
                : <div className="servicediv">
                    {myarray.map(({ recipe }, i) => {
                        return <div key={i} className="card">
                            <div><b>{recipe.label}</b></div>
                            <img src={recipe.image} alt="" className="imagebox" />
                            <div className="box1"> <div className="centerit"> <b><i><u>Ingrediants :</u></i></b> <br /> </div><br /> {recipe.ingredientLines.map((e, index) => { return <div key={index}>* {e}</div> })}</div>
                            <div className="box" onClick={() => { window.open(recipe.url) }}>Get Recipe</div>
                        </div>
                    })}
                </div>}
        </>
    )
}

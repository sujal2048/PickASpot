import React from 'react'
import location from "../../gifs/location.gif"
import manage from "../../gifs/manage.gif"
import green from "../../gifs/green.gif"
import money from "../../gifs/money.gif"
const Whyus = () => {
    return (
        <>
            <div className="container text-center">
                <h1 className=' fa-bold fw-bold mb-3' style={{color:"#03045E"}}>Why PickASpot?</h1>
                <div className="row">
                    <div className="col-lg-3">
                    <img src={location} alt="location"/>
                    <h5>Save time, fuel and effort with smart parking</h5>
                    </div>
                    <div className="col-lg-3">
                    <img src={manage} alt="manage"/>
                    <h5>Easy to use, better customer experience</h5>
                    </div>
                    <div className="col-lg-3">
                    <img src={green} alt="green"/>
                    <h5>Helps in reducing air pollution , promote greenery</h5>
                    </div>
                    <div className="col-lg-3">
                    <img src={money} alt="money"/>
                    <h5>Cost effective in long run</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Whyus

import React from 'react'
import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../../Css/services.css'
import { Fade } from 'react-reveal';
const Services = () => {
    return (
        <>
          <div className="container text-center" id="services">
              <h1 className=' fa-bold fw-bold mb-5 mt-5' style={{color:"#03045E"}}>What do we do?</h1>
            <div className="row">
                <div className="col-lg-5 text-lg-start text-primary" style={{color:"#0077B6"}}>
                    <Fade top>
                    <h2 style={{color:"#023E8A"}}> 1) Realtime Parking Management</h2>
                    </Fade>
                    <Fade top>
                    <h2 style={{color:"#023E8A"}}> 2) Camera and Equipments Installation</h2>
                   </Fade>
                   <Fade top>
                    <h2 style={{color:"#023E8A"}}> 3) Live Parking Status</h2>
                    </Fade>
                    <Fade top>
                    <h2 style={{color:"#023E8A"}}> 4) Future Prediction</h2>
                    </Fade>
                </div>
                <div className="col-lg-6">
                  <Carousel>
                    <div className='services-img-div'>
                      <img src="https://justpaste.it/img/dc31eb8a8d5ab5f42db9038b1310aa34.png" alt='img' />
                      
                    </div>
                    <div className='services-img-div'>
                      <img src="https://miro.medium.com/max/1400/1*CwuEQTbZpBbzaRxPkWAW7Q.jpeg" alt='img' />
                      
                    </div>
                    <div className='services-img-div'>
                      <img src="https://www.plasmacomp.com/wp-content/uploads/2016/06/Smart-Parking-Solution-1-1024x507.jpg" alt='img' />
                    
                    </div>
                  </Carousel>
                </div>
            </div>
          </div>  
        </>
    )
}

export default Services

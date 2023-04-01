import React from 'react'
import "../../Css/team.css"

import {AiFillFacebook,AiFillInstagram,AiFillLinkedin} from "react-icons/ai"
const Team = () => {
    return (
        <>
          <div class="container">
              <h1 className=' fa-bold fw-bold mb-5 mt-5 text-center' style={{color:"#03045E"}}>Meet our Team</h1>
  <div class="row">
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class="our-team">
        <div class="picture">
          <img class="img-fluid" src="https://picsum.photos/130/130?image=1027"/>
        </div>
        <div class="team-content">
          <h3 class="name">Harsh Verma</h3>
          <h4 class="title">Manager</h4>
        </div>
        <ul class="social">
        <li><a href="#" class="fa fa-facebook" aria-hidden="true"> <AiFillLinkedin color="white" size={25}/> </a></li>
          <li><a href="#" class="fa fa-twitter" aria-hidden="true"> <AiFillInstagram color="white" size={25}/></a></li>
          <li><a href="#" class="fa fa-google-plus" aria-hidden="true"> <AiFillFacebook color="white" size={25}/></a></li>
          
        </ul>
      </div>
    </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class="our-team">
        <div class="picture">
          <img class="img-fluid" src="https://picsum.photos/130/130?image=839"/>
        </div>
        <div class="team-content">
          <h3 class="name">Prince</h3>
          <h4 class="title">Co-Founder</h4>
        </div>
        <ul class="social">
        <li><a href="#" class="fa fa-facebook" aria-hidden="true"> <AiFillLinkedin color="white" size={25}/> </a></li>
          <li><a href="#" class="fa fa-twitter" aria-hidden="true"> <AiFillInstagram color="white" size={25}/></a></li>
          <li><a href="#" class="fa fa-google-plus" aria-hidden="true"> <AiFillFacebook color="white" size={25}/></a></li>
          
        </ul>
      </div>
    </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class="our-team">
        <div class="picture">
          <img class="img-fluid" src="https://picsum.photos/130/130?image=856"/>
        </div>
        <div class="team-content">
          <h3 class="name">Devansh Goyal</h3>
          <h4 class="title">Head</h4>
        </div>
        <ul class="social">
        <li><a href="#" class="fa fa-facebook" aria-hidden="true"> <AiFillLinkedin color="white" size={25}/> </a></li>
          <li><a href="#" class="fa fa-twitter" aria-hidden="true"> <AiFillInstagram color="white" size={25}/></a></li>
          <li><a href="#" class="fa fa-google-plus" aria-hidden="true"> <AiFillFacebook color="white" size={25}/></a></li>
          
        </ul>
      </div>
    </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class="our-team">
        <div class="picture person">
          <img class="img-fluid person" src="https://user-images.githubusercontent.com/75678206/227342930-2e3f77fb-a708-4445-8d4d-b965d7d2a5a6.jpg" />
        </div>
        <div class="team-content">
          <h3 class="name">Sujal Gupta</h3>
          <h4 class="title">Web Developer</h4>
        </div>
        <ul class="social">
          <li><a href="https://www.facebook.com/profile.php?id=100056035449144" class="fa fa-facebook" aria-hidden="true"> <AiFillLinkedin color="white" size={25}/> </a></li>
          <li><a href="https://www.instagram.com/sujalgupta628/" class="fa fa-twitter" aria-hidden="true"> <AiFillInstagram color="white" size={25}/></a></li>
          <li><a href="https://www.linkedin.com/in/sujal-gupta-436752201/" class="fa fa-google-plus" aria-hidden="true"> <AiFillFacebook color="white" size={25}/></a></li>
          
        </ul>
      </div>
    </div>
    
  </div>
</div>  
        </>
    )
}

export default Team

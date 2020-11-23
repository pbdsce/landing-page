import React from "react"
import Icon from "../images/pb_2.svg";



function Hero() {

    return (

<header>
    <div className="section-center hero-center">

     <article className="hero-info">
          <div>
            <div className="info-hero">
            <h4>Point Blank is a programming community that operates out of Dayananda Sagar College of Engineering, Bangalore. We organize programming competitions, seminars and workshops centered around major competitions such as Hackathon, ACM ICPC, SIH and GSoC..</h4>
              </div>

          </div>
        </article>
        <Icon className="hero-img"/>
    </div>
</header>
    )
}

export default Hero

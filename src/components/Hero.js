import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
    {
      file(relativePath: {eq: "hero.png"}) {
        childImageSharp {
          fluid {            
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `

function Hero() {       
    const {file:{
        childImageSharp :{fluid},
    },
} = useStaticQuery(query)
    // console.log(data)

    return (

<header>
    <div className="section-center hero-center">
   
     <article className="hero-info">
          <div>
            <div className="info-hero">
            <h2>
                {/* we are 	&lt;&nbsp;.&gt;  */}
                POINT BLANK</h2>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore esse aspernatur veritatis quasi quidem modi? Accusamus consectetur corporis aliquam laudantium?</h4>
              </div>
          </div>
        </article>

        <Image fluid={fluid} className="hero-img" />
    </div>
</header>
    )
}

export default Hero

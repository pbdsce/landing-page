import React, {useState} from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
// import { graphql, useStaticQuery } from "gatsby"
import aboutdata from "./aboutdata"
// import { useStaticQuery } from "gatsby"


const Jobs = () => {
     const [value, setValue] = React.useState(0)
  const { name, subabout, desc } = aboutdata[value]

    return (
        <section className="section about">
      <Title title="About Point Blank" />
      <div className="about-center">
        {/* btn container */}
        <div className="btn-container">
          {aboutdata.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`about-btn ${index === value && "active-btn"}`}
              >
                {item.name}
              </button>
            )
          })}
        </div>
        {/* about info */}
        <article className="about-info">
          <h3>{name}</h3>
          <h4>{subabout}</h4>
          
          {/* /// place to add more  */}
          {desc.map(item => {
            return (
              <div key={item.id} className="about-desc">
                <FaAngleDoubleRight className="about-icon"></FaAngleDoubleRight>
                <p>{item.name}</p>
              </div>
            )
          })}
        </article>
      </div>
    </section>
  )
  
}

export default Jobs


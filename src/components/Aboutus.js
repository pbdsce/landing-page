import React from "react"
import Title from "./Title"
import aboutusdata from "./aboutusdata"

const Aboutus = () => {
  return (
    <section className="section ">
      <Title title="About Us" />
      <div className="section-center services-center">
        {aboutusdata.map(aboutus => {
          const { id, icon, title, text } = aboutus

          return (
            <article key={id} className="service">
              {icon}
              <h4>{title}</h4>
              <div className="underline"></div>
              <p>{text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Aboutus

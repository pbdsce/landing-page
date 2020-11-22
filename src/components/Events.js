import React from "react"
import Title from "./Title"
import aboutusdata from "./eventdata"

const Events = () => {
  return (
    <section className="section ">
      <Title title="Upcoming Events" />
      <div className="section-center events-center">
        {aboutusdata.map(aboutus => {
          const { id, icon, title, text } = aboutus

          return (
            <article key={id} className="event">
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

export default Events

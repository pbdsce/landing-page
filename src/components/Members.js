import React from "react"
import Title from "./Title"
import memberdata from "./memberdata"

const Members = () => {
  return (
    <section className="section ">
      <Title title="Members" />
      <div className="section-center events-center">
        {memberdata.map(member => {
          const { id, name, image , title,desc,githuburl, linkedinurl,instagramurl} = member

          return (
              <h1>adofijdj</h1>
           
          )
        })}
      </div>
    </section>
  )
}


export default Members

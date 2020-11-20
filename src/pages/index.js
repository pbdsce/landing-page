import React from "react"
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Events from '../components/Events'
import About from '../components/About'
import SEO from '../components/SEO'

export default function Home() {
  return (
  <>
    <Layout>
      <SEO />
<br />
< Hero />
<br />

<Events/>
<br />
<About />
<br />

<br /><br />

     
    </Layout>
  </>
  )
}

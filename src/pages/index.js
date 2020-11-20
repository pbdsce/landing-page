import React from "react"
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Aboutus from '../components/Aboutus'
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


<About />
<br /><Aboutus />

<br /><br />

     
    </Layout>
  </>
  )
}

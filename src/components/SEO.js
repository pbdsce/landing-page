import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import favicon from '../images/favicon.png';

const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDesc: description
        siteUrl
        siteTitle: title
      }
    }
  }
`
const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query)
  const {
    siteDesc,
    siteTitle,
   
  } = site.siteMetadata
  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={` ${siteTitle}`}>
      <meta name="description" content={description || siteDesc} />
      <meta name="description" content="DSCE" />
      <meta name="description" content="Dayananda Sagar College of Engineering" />
      {/* link={[
      { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
  ]} */}

     </Helmet>
  )
}

export default SEO

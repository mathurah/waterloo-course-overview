import React from "react"
import { graphql, Link } from "gatsby"
import Header from "../components/Header"
import "../styles/styles.css"
import "@fontsource/open-sans"

const Layout = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  const pokopoko = { "1B": [], "2A": [], "2B": [], "3A": [], research: [] }
  edges.forEach(edge => {
    // console.log(edge)
    // console.log(edge.node.frontmatter.path.split("/"))
    pokopoko[edge.node.frontmatter.path.split("/")[1]].push(edge)
  })

  return (
    <div
      className="side-margins"
      style={{
        fontFamily: "open sans",
      }}
    >
      <Header data={data} />
      <h3>👋 hey there!</h3>
      <p>
        This blog is living document to keep track of key takeaways from
        courses, things I've published and learned, and a keepsake for me to
        look at at the end of my degree.
      </p>
      <p>
        I also thought it would be a good reference for any future SYDEs or
        those considering Systems Design Engineering to get a better idea of
        what the courses are like, and hopefully answer the question: What the
        heck even is Systems Design Engineering? (although I'm still wondering
        the answer to that question myself).
      </p>
      <p>Note: please do not copy my work!</p>
      {Object.keys(pokopoko).map(section => {
        return (
          <>
            <h2>{section}</h2>
            {pokopoko[section].map(({ node: { frontmatter } }) => (
              <div key={frontmatter.path} style={{ marginBottom: "1rem" }}>
                <Link to={frontmatter.path}>{frontmatter.title}</Link>
              </div>
            ))}
          </>
        )
      })}
    </div>
  )
}

export const query = graphql`
  query OneAquery {
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___tags] }
      filter: { parent: {}, frontmatter: { tags: { eq: "main" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            tags
          }
        }
      }
    }
    # file(relativePath: {eq: "hamster.jpg"}, sourceInstanceName: {eq: "images"}) {
    #   childImageSharp {
    #     gatsbyImageData(width: 2500, height: 2500, layout: FIXED) {
    #       ...GatsbyImageSharpFixed
    #     }
    #   }
    # }
  }
`
export default Layout

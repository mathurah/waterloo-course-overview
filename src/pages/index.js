import React from "react"
import {graphql, Link} from 'gatsby'
import Header from '../components/Header'
import '../styles/styles.css';

const Layout = ({data}) => {
  const {edges} = data.allMarkdownRemark
  const pokopoko = {"1A": [], "1B": [], "2A": []}
  edges.forEach((edge) => {
    console.log(edge)
    console.log(edge.node.frontmatter.path.split("/"))
    pokopoko[edge.node.frontmatter.path.split("/")[1]].push(edge)
  })
  
  return (
    <div className="side-margins" style= {{
      fontFamily: 'avenir'
    }}>
      <Header/>
     <h3>👋 hey there!</h3>
        <p>This blog is a chance for me to look back on all my courses after the degree for memories on what I've learned and my experiences with them!</p>
        <p>I also thought it would be a good reference for any future SYDEs or those considering Systems Design Engineering to get a better idea of what the courses are like, and hopefully answer the question: What the heck even is Systems Design Engineering? (although I'm still wondering the answer to that question myself).</p>
        <p>These are the opinions of just one student and I'd encourage you to reach out to other people in Systems Design Engineering to share their experiences!</p>
      {Object.keys(pokopoko).map(section =>{
        return (
        <>
          <h2>{section}</h2>
          {pokopoko[section].map(({node: {frontmatter}}) => <div key = {frontmatter.path} style= {{marginBottom: '1rem'}} >
          <Link to ={frontmatter.path}>{frontmatter.title}</Link>
      </div>
      )
            }
        </>)
      } )}
    </div>
  )
}

export const query = graphql `
query OneAquery {
  allMarkdownRemark (
    sort: {order: ASC, fields: [frontmatter___tags]}
    filter: {parent: {}, frontmatter: {tags: {eq: "main"}}}
    ),
   {
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
}
`
export default Layout


import React from "react"
import {graphql, Link} from 'gatsby'
import Header from '../components/Header'

const Layout = ({data}) => {
  const {edges} = data.allMarkdownRemark
  console.log(edges)
  return (
    <div style= {{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: 'avenir'
    }}>
      <Header/>
      {edges.map(edge =>{
        const {frontmatter} = edge.node 
        return (
          <div key = {frontmatter.path}style= {{
            marginBottom: '1rem'}} ><Link to ={frontmatter.path}>{frontmatter.title}
            </Link>
          </div>
        )
      } )}
    </div>
  )
}

export const query = graphql `
query HomepageQuery{
  allMarkdownRemark (
    sort: {order: ASC, fields: [frontmatter___tags]}
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
}
`
export default Layout
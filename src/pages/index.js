import React from "react"
import {graphql, Link} from 'gatsby'
import Header from '../components/Header'
import chain from "lodash/chain";
import TwoA from '../components/TwoA'

const Layout = ({data}) => {
  const {edges} = data.allMarkdownRemark
  const pokopoko = {"1A": [], "1B": [], "2A": []}
  edges.forEach((edge) => {
    console.log(edge)
    console.log(edge.node.frontmatter.path.split("/"))
    pokopoko[edge.node.frontmatter.path.split("/")[1]].push(edge)
  })
  

  //why are you calliubng it MATHUBEARISGOINGTORULETHEWORLDDDDDDDDDDDHAHAHAHAHAHooo
  console.log(edges)
  // const terms = _.chain(edges).groupBy(node => node.node.fields.slug.split('/')[1])
  // .map(node => node) //using ES6 shorthand to generate the objects
  // .value();ikj
  // console.log(terms)
  return (
    <div style= {{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: 'avenir'
    }}>
      <Header/>
      {/* how do I get this to only display things for each term? */}
       
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
    sort: {order: ASC, fields: [frontmatter___tags]}),
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

//filter: {parent: {}, frontmatter: {tags: {eq: "1A"}}}) 
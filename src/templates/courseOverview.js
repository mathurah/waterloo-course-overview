import React from 'react'
import {graphql, Link} from 'gatsby'
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
import Header from '../components/Header';
deckDeckGoHighlightElement();

const courseOverview = ({data}) => {
    const {markdownRemark} = data
    const title = markdownRemark.frontmatter.title
    const html = markdownRemark.html
    return (
        <div className= 'container' style = {{
            fontFamily: 'avenir'
        }}>
          <Header/>
        <h1>{title}</h1>
            <div className="blogpost" dangerouslySetInnerHTML={{__html: html}} /> 
            {/* going to render the html from the query */}
        </div>
    )
}

export const query = graphql `
    query($pathSlug: String!){
        markdownRemark(frontmatter: {path: {eq: $pathSlug}}){
            html
            frontmatter {
                title
            }
        }
    }
`
export default courseOverview
import React from 'react'
import {graphql} from 'gatsby'

const courseOverview = ({data}) => {
    const {markdownRemark} = data
    const title = markdownRemark.frontmatter.title
    const html = markdownRemark.html
    return (
        <div style = {{
            fontFamily: 'avenir'
        }}>
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
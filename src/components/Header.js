import React from "react"
import {StaticQuery, graphql, Link} from 'gatsby'
import Img from "gatsby-image"

import { GatsbyImage, getImage } from "gatsby-plugin-image";

const TitleAndDescription = ({data}) => {
    const title = data.site.siteMetadata.title
    // const description = data.site.siteMetadata.description
    // console.log(image)
    return (
      <div style ={{
        fontFamily: 'open sans',
        fontSize: '20px',
        lineHeight: 1.45,
      }}>
        <Link to="/" >
          <div className="home-navigation" style ={{
            display: 'flex', 
            flexDirection: 'row'
          }}>
          
             <img src="https://i.ibb.co/MfJqV0B/Goose-Stamp.png" alt="Goose-Stamp" border="0"  class="homepage-img" ></img>
            <h2 style= {{ marginBottom: 0 }}>{title}</h2>
          </div>
        </Link>
      </div>
    );
  }
  
  const Header = () => {
    return (
      <StaticQuery
      query={graphql `
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
      `}
      render={data => 
      <TitleAndDescription data = {data}
      /> 
      } />
    )
  }

export default Header


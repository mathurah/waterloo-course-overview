import React from "react"
import {StaticQuery, graphql, Link} from 'gatsby'

const TitleAndDescription = ({data}) => {
    const title = data.site.siteMetadata.title
    const description = data.site.siteMetadata.description
  
    return (
      <div style ={{
        fontFamily: 'avenir',
        fontSize: '20px',
        lineHeight: 1.45,
      }}>
      <Link to="/" ><div className="home-navigation" style ={{
        display: 'flex', 
        flexDirection: 'row'
      }}>
      <img alt="goose stamp, designed by Krystal Truong" class="homepage-img" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/60cfe61f-bddc-4b28-90e4-9ed2dd1f61d0/Goose_Stamp.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210531T000611Z&X-Amz-Expires=86400&X-Amz-Signature=09953d78bfc1b41f1f4e90aee3a32845889838e2cdc84f22aa629a1db73f6281&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Goose_Stamp.png%22"></img>
      <h2 style= {{
          marginBottom: 0
        }}>{title}</h2>
      </div></Link>
      </div>
    )
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
      render={data => <TitleAndDescription data = {data}/> 
      } />
    )
  }

  export default Header
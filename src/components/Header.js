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
             <img src ="https://lh3.googleusercontent.com/frqTPVWSReqG-5BB3LEcMcKdl_trqM_VK8Q-J7jYa2rHyOAKS0vZQ_vTYWpWuSpLUXHJRHyf88sIelgs9jySGviLfYb6H3H4B88MhKN3wjbB5dkzyTvCCKeF4MTrVHod3TMoQqg67qrDHC2yNtKvtMdTmWsl-j07k1yUoLU-ZJLYTF51knL4pOaTzVl7Z5tiVVUbn_wcPRHoq4BG63iYQXACTum1RkdDIyBxHh_DOvUiqw69neB0WKRt3oVQIkAdS2eqoENJhRPRtlDmNA9vozZXlY_AoIn2Hbht3LS0LLfzhnt1vBIRx007IojV_fLh-QzC5gp1wm7LdSMH92b-hsiEPj4MppwWHcyic0uR7e4WCnaFzrbLEBd8syW5LwB73dXndQagigudB0f6pUbyvb0oVraycafzLXhACz-zqxjmHdfutbUWK7DfCLzXvrU6C6OMlxInDAvaXHSY0HDewbcXgq9a2xq1lhGsKlrhDSLhwGBtVlj8ovZQnBtjffxiAmX2L2AJxrhtpusGvf3rkeRjH-AklCITwDhB1Eketi7Z69RJp-BmAUGSpYjnu1v1FnD-s_2FOXa19stOb2P9_8i-N3P7l2sVFtgPOAQQu2lNuRojj4HLKcD6fCWq16MGh4PeaqYU3AEN8_olzu7_P4sOpxLXQNNxX1AagNgETc1uFT3QjU2QRBNdpTuBAxuYrwN85HkkAMDh50lSyg9nUnYugQ=w148-h175-no?authuser=0" class="homepage-img" ></img>
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


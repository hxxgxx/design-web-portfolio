import React from "react"
import Fade from "react-reveal/Fade"
import data from "../data"

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
        
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h1>
                {data.headerTagline[0]
                  ? data.headerTagline[0]
                  : "uniform Design"}
              </h1>
              <h1>
                {" "}
                {data.headerTagline[1]
                  ? data.headerTagline[1]
                  : "products, brands"}
              </h1>
              <h1>
                {" "}
                {data.headerTagline[2]
                  ? data.headerTagline[2]
                  : "and UX/UI"}
              </h1>
            </div>
          </Fade>
          <Fade bottom>
            <p>{data.headerParagraph}</p>
          </Fade>
          
        </div>
      </div>
    </div>
  )
}

export default Header

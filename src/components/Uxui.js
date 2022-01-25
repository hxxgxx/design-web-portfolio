import React from "react"
import Fade from "react-reveal/Fade"
import data from "../data"

const Uxui = () => {
  return (
    <div className="section" id="uxui">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>UX/UI Design</h1>
            </Fade>
              {data.uxuiOne}

            <p>
              <br /><br /><br />
              <br></br>
              <br></br>
              {data.uxuiTwo}
              <br></br>
              <br></br>
              {data.uxuiThree}
            </p>
          </div>
          <div className="image-wrapper">
            <img src={data.uxuiImageOne} alt="uxuiImageOne"></img>
          </div>
        </div>
          <br /><br /><br />
          <br /><br /><br />
          <br /><br /><br />
          <br />
          <div className="image-wrapper">
            <img src={data.uxuiImageTwo} alt="uxuiImageTwo"></img>
          </div>


      </div>
    </div>
  )
}

export default Uxui

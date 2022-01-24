import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Afreecafreecs = () => {
  return (
    <div className="section" id="afreecafreecs">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>2020 
                <br /><br /><br />
                Afreeca Freecs 
                <br /><br /><br />
                Uniform Design</h1>
            </Fade>
              {data.freecsOne}

            <p>
              <br /><br /><br />
              <br></br>
              <br></br>
              {data.freecsTwo}
              <br></br>
              <br></br>
              {data.freecsThree}
            </p>
          </div>
          <div className="image-wrapper">
            <img src={data.freecsImageOne} alt="freecsImageOne"></img>
          </div>
          <br></br>
          <br></br>
          
     
        </div>
          <div className="image-wrapper">
          <br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br />
            <img src={data.freecsImageTwo} alt="freecsImageTwo"></img>
          </div>

          <br /><br /><br />
          <div className="image-wrapper">
            <img src={data.freecsImageThree} alt="freecsImageThree"></img>
          </div>

          <br />
          <div className="image-wrapper">
            <img src={data.freecsImageFour} alt="freecsImageFour"></img>
          </div>

          <br />
          <div className="image-wrapper">
            <img src={data.freecsImageFive} alt="freecsImageFive"></img>
          </div>

      </div>
    </div>
  )
}

export default Afreecafreecs

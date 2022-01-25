import React from "react"
import Fade from "react-reveal/Fade"
import data from "../data"

const Skwyverns = () => {
  return (
    <div className="section" id="skwyverns">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>2018-2019
                <br /><br /><br />
                SK Wyverns 
                <br /><br /><br />
                Banners and Merchandise Design</h1>
            </Fade>
              {data.skOne}

            <p>
              <br /><br /><br />
              <br></br>
              <br></br>
              {data.skTwo}
              <br></br>
              <br></br>
              {data.skThree}
            </p>
          </div>
          <div className="image-wrapper">
            <img src={data.skImageOne} alt="freecsImageOne"></img>
          </div>
          <br></br>
          <br></br>
          
     
        </div>

          <br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br />

            <img src={data.skImageTwo} alt="skImageTwo"></img>

          

            <img src={data.skImageThree} alt="skImageThree"></img>
        
            <img src={data.skImageFour} alt="skImageFour"></img>
            <img src={data.skImageFive} alt="skImageFive"></img>


      </div>
    </div>
  )
}

export default Skwyverns

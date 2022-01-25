import React from "react"
import Fade from "react-reveal/Fade"
import data from "../data"

const Basketball = () => {
  return (
    <div className="section" id="basketball">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>2020 
                <br /><br /><br />
                3X3 Basketball 
                <br /><br /><br />
                Uniform Design</h1>
            </Fade>
              {data.basketballOne}

            <p>
              <br /><br /><br />
              <br></br>
              <br></br>
              {data.basketballTwo}
              <br></br>
              <br></br>
              {data.basketballThree}
            </p>
          </div>
          <div className="image-wrapper">
            <img src={data.basketballImageOne} alt="basketballImageOne"></img>
          </div>
          <br></br>
          <br></br>
          
     
        </div>
          <div className="image-wrapper">
          <br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br />
            <img src={data.basketballImageTwo} alt="basketballImageTwo"></img>
          </div>

          <br /><br /><br />
          <div className="image-wrapper">
            <img src={data.basketballImageThree} alt="basketballImageThree"></img>
          </div>

          <br />
          <div className="image-wrapper">
            <img src={data.basketballImageFour} alt="basketballImageFour"></img>
          </div>

          <br />
          <div className="image-wrapper">
            <img src={data.basketballImageFive} alt="basketballImageFive"></img>
          </div>

          <br />
          <div className="image-wrapper">
            <img src={data.basketballImageSix} alt="basketballImageSix"></img>
          </div>

          <br />
          <div className="image-wrapper">
            <img src={data.basketballImageSeven} alt="basketballImageSeven"></img>
          </div>

          <br />
          <div className="image-wrapper">
            <img src={data.basketballImageEight} alt="basketballImageEight"></img>
          </div>

          <br />
          <div className="image-wrapper">
            <img src={data.basketballImageNine} alt="basketballImageNine"></img>
          </div>

          <br />
          <div className="image-wrapper">
            <img src={data.basketballImageTen} alt="basketballImageTen"></img>
          </div>

          <br />
          <div className="image-wrapper">
            <img src={data.basketballImageEleven} alt="basketballImageEleven"></img>
          </div>
      </div>
    </div>
  )
}

export default Basketball

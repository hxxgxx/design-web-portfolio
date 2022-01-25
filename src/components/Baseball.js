import React from "react"
import Fade from "react-reveal/Fade"
import data from "../data"

const Baseball = () => {
  return (
    <div className="section" id="baseball">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>Ansan Technical 
                <br /><br /><br />
                HighSchool Baseball Team
                <br /><br /><br />
                Uniform Design</h1>
            </Fade>
              {data.baseballOne}

            <p>
              <br /><br /><br />
              <br></br>
              <br></br>
              {data.baseballTwo}
              <br></br>
              <br></br>
              {data.baseballThree}
            </p>
          </div>
          <div className="image-wrapper">
            <img src={data.baseballImageOne} alt="baseballImageOne"></img>
          </div>
        </div>
          <br /><br /><br />
          <br /><br /><br />
          <br />
          <div className="image-wrapper">
            <img src={data.baseballImageTwo} alt="baseballImageTwo"></img>
          </div>
        
         

          

      </div>
    </div>
  )
}

export default Baseball

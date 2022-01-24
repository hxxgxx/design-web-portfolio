import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Kpga = () => {
  return (
    <div className="section" id="kpga">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>KPGA
                <br /><br /><br />
                Branding Design</h1>
                {/* <br /><br /><br />
                Uniform Design</h1> */}
            </Fade>
              {data.kpgaOne}

            <p>
              <br /><br /><br />
              <br></br>
              <br></br>
              {data.kpgaTwo}
              <br></br>
              <br></br>
              {data.kpgaThree}
            </p>
          </div>
          <div className="image-wrapper">
            <img src={data.kpgaImageOne} alt="kpgaImageOne"></img>
          </div>
        </div>
          <br /><br /><br />
          <br /><br /><br />
          <br />
          <div className="image-wrapper">
            <img src={data.kpgaImageTwo} alt="kpgaImageTwo"></img>
          </div>

          <br />
          <div className="image-wrapper">
            <img src={data.kpgaImageThree} alt="kpgaImageThree"></img>
          </div>
         

          

      </div>
    </div>
  )
}

export default Kpga

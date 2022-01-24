import React from 'react';

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Footer from "../components/Footer"
import Kpga from "../components/Kpga"


const kpga = () => (
  <Layout>
    <SEO title="KPGA Branding" />
    <Kpga></Kpga>
    <Footer></Footer> 
  </Layout>
)


export default kpga

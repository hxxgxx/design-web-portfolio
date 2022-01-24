import React from 'react';

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Footer from "../components/Footer"
import Uxui from "../components/Uxui"


const uxui = () => (
  <Layout>
    <SEO title="UX/UI Design" />
    <Uxui></Uxui>
    <Footer></Footer> 
  </Layout>
)


export default uxui

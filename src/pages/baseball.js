import React from 'react';

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Footer from "../components/Footer"
import Baseball from "../components/Baseball"


const baseball = () => (
  <Layout>
    <SEO title="ATHS Baseball" />
    <Baseball></Baseball>
    <Footer></Footer> 
  </Layout>
)


export default baseball

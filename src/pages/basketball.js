import React from 'react';

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Footer from "../components/Footer"
import Basketball from "../components/Basketball"


const basketball = () => (
  <Layout>
    <SEO title="3X3 Basketball" />
    <Basketball></Basketball>
    <Footer></Footer> 
  </Layout>
)


export default basketball

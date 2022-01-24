import React from 'react';

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Footer from "../components/Footer"
import SKwyverns from "../components/SKwyverns"


const skwyverns = () => (
  <Layout>
    <SEO title="SK Wyverns" />
    <SKwyverns></SKwyverns>
    <Footer></Footer> 
  </Layout>
)


export default skwyverns

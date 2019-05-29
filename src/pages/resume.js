import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ResumePage = () => {
  return (
    <div>
      <Layout>
        <SEO title="Resume" />
        <section className="section">
          <h1>Resume</h1>
          <iframe
            className="resume"
            height="640"
            width="480"
            title="Resume"
            src="https://drive.google.com/file/d/1HwarQMbQI1TEfxcrPOPQfwBNvtrJnsJw/preview"
          />
        </section>
      </Layout>
    </div>
  )
}

export default ResumePage

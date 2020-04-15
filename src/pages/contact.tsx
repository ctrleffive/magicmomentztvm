import React from 'react'
import { config, useSpring } from 'react-spring'
import Layout from '../components/layout'
import { AnimatedBox } from '../elements'
import SEO from '../components/SEO'

const About = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout color="#f7f7f7">
      <SEO title="About | Magic Momentz" desc="Magic Momentz - Momentz to treasure forever" />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <h1>Contact Us</h1>
        <h3>Address</h3>
        <p>
          Magic Momentz,<br />
          Room No. 01,<br />
          Thekkenadayil Building,<br />
          Mahadeva Temple Thekkenada,<br />
          Kazhakuttom P.O.,<br />
          Trivandrum - 695582
        </p>
        <h3>Email</h3>
        <p>
          arunjyothicv@gmail.com<br />
          magicmomentzarunjyothicv@gmail.com
        </p>
        <h3>Phone</h3>
        <p>
          +919995220580
        </p>
      </AnimatedBox>
    </Layout>
  )
}

export default About

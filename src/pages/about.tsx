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
        <h1>A little bit About Us</h1>
        <h3>Who we are and our story... Where did it all begin?</h3>
        <p>Magic Momentz Photography is run by Arun Jyothi CV who has captured
hundreds of weddings as a photographer. He is one of the leading
wedding photographers in Kerala with an experience over 10 years in
this field. Photography is part of his soul and he finds the camera as an
extension of his heart and his voice.</p>
        <p>Our common goal is to meet all your expectations when it comes to
recording the memories that you create for yourself on your special
days. We work in a unique way with our clients. It all starts with a
conversation with them. We strive to best understand what they are
actually looking for. This helps us to know their personalities and allows
us to tell their wedding story in the best possible way.</p>
<p>While we have a style which we would describe as vibrant, colourful and
bold – we are also very flexible and listen to what our bride and grooms
really want rather than force our style upon them. We are well aware that
every couple is different and when some want significant focus on them
and their portraits, others want a more laid back and reportage
approach. It’s quite easy and natural for us to adapt to your
requirements so that you always feel comfortable.</p>
<h2>Our Team</h2>
<p>Located at Kazhakuttom in the capital city of Kerala, we boast of having
very highly experienced, skilled, and professional photographers in our
team. We work together and independently on projects that include
weddings, music videos, corporate events, commercial and live events
but always utilising the strengths of each team member depending on
the project at hand.</p>
<h2>Our Story</h2>
<p>Arun Jyothi C V is a former techie who turned in to a wedding
photographer. Passionate about capturing every little emotions that
counts in your life to portrait your memories to the best you can ever
imagine. Picturising the joy, the happiness, the love the emotions all to
flatter your heart in seconds. . The core services include professional
photography for coverage of weddings, reception, engagement,
birthdays, Seemantham, corporate events, corporate profiles, training
programs and fashion shows. Our establishment takes pride in
producing high-quality videos that cover numerous outdoor events.</p>
      </AnimatedBox>
    </Layout>
  )
}

export default About

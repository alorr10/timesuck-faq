import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="faq-container">
      <div class="faq">
        <h2>
          Don't see your question here? You can always email us at{" "}
          <a href="mailto:alexa@brighten.in">alexa@brighten.in</a> with any
          questions! We love hearing from you :){" "}
        </h2>

        <h3> What is Timesuck? </h3>
        <p>
          Timesuck is an app that logs your screen time each day to help you
          become more aware of how much time you spend on your phone.
        </p>
        <h3> Why do I need to allow location access?</h3>
        <p>
          Because of some iOS limitations, Timesuck needs access to location in
          order to stay open in the background and log screen time. Your
          location is stored locally on your phone, and is 100% private; we
          don't ever see it.
        </p>

        <h3>How do I add friends?</h3>
        <p>
          Tap the add a friend button and search for their name or username.
        </p>

        <h3>My screentime is not accurate!</h3>
        <p>
          iOS does not allow access to their screen time api (we have no idea
          why) so we have to use our own methods of tracking screen time, and
          sometimes it messes up. We're working hard every day to make it more
          accurate!
        </p>

        <p>
          You're always welcome to text or email us through the app if you need
          any help with anything at all!
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage

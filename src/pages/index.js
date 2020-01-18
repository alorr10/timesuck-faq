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
        <h3>
          Don't see your question here? You can always{" "}
          <a href="sms://+17242647086">text us</a> with any questions! We love
          hearing from you :){" "}
        </h3>

        <h3> What is Timesuck? </h3>
          Timesuck is an app that logs your screen time each day to help you
          become more aware of how much time you spend on your phone.
        </p>

        <h3>
          Does Timesuck have to be in the background to measure my screen time?
        </h3>
        <p>
          Short answer: Yes. Timesuck must be running in the background to
          measure when you’re using your phone. It does not have to be open and
          active. You can press the home button and leave Timesuck in the
          background, but you cannot completely force quit the app (swiping up
          from the multitasking menu)
        </p>

        <h3> Why do I need to allow location access?</h3>
        <p>
          Because of some iOS limitations, Timesuck needs access to location in
          order to stay open in the background and log screen time. Your
          location is stored locally on your phone, and is 100% private; we
          don't ever see it.
        </p>

        <h3>Does it drain battery?</h3>
        <p>
          Not really. Because it needs to be running the background, Timesuck
          will use around 1% of your battery per day. You should barely notice
          it.
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

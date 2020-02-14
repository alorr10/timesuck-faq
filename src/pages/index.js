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
        <h3 class="topHeader">
          Don't see your question here? You can always{" "}
          <a href="sms://+17242647086">text us</a> with any questions! We love
          hearing from you :){" "}
        </h3>

        <h3> What is Phoneless? </h3>
        <p>
          Phoneless is an app that logs your screen time each day to help you
          become more aware of how much time you spend on your phone.
        </p>

        <h3>
          Does Phoneless have to be in the background to measure my screen time?
        </h3>
        <p>
          Short answer: Yes. Phoneless must be running in the background to
          measure when you’re using your phone. It does not have to be open and
          active. You can press the home button and leave Phoneless in the
          background, but you cannot completely force quit the app (swiping up
          from the multitasking menu)
        </p>

        <h3> Why do I need to allow location access?</h3>
        <p>
          Because of some iOS limitations, Phoneless needs access to location in
          order to stay open in the background and log screen time. Your
          location is stored locally on your phone, and is 100% private; we
          don't ever see it.
        </p>

        <h3>
          Why do I keep getting popups saying Phoneless is tracking my location?
        </h3>
        <p>
          Background location access is required to keep the app open in the
          background to log screen time. We completely ignore the location data
          itself. These popups are simply reminders that the app has been
          running in the background, logging screen time.
        </p>

        <h3>Does it drain battery?</h3>
        <p>
          Not really. Because it needs to be running the background, Phoneless
          will use around 1% of your battery per day. You should barely notice
          it.
        </p>

        <h3>How do I add friends?</h3>
        <p>
          Tap the add a friend button and search for their name or username.
        </p>

        <h3>My screentime is not accurate!</h3>
        <p>
          Sometimes Phoneless isn’t perfect at detecting your screen time,
          especially in the first few days of using it. If you want Phoneless to
          be super accurate (and save a ton of battery), the best thing to do
          would be to set up a passcode or Face ID to unlock your device. You
          can do that from your Settings app > Face ID & Passcode.{" "}
        </p>

        <h3>Why is my screentime way higher than it should be?</h3>
        <p>
          Phoneless tracks the time that your screen is literally on. This
          includes when you receive push notifications. Try placing your phone
          screen-down at night, and consider going through your settings page
          and turning off notifications for apps you don't need them for.
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

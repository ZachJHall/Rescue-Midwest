import React from "react"
import Layout from "../components/layout"


const DonatePage = () => (
  <Layout>
    <div>
      <h1>Donate</h1>
      <div>
        <div className="center">
          <p>
            Chihuahua Rescue Midwest understands that there are many people who
            do not have the time or resources to foster but want to help
            organizations such as ours. We accept donations that go to the
            complete benefit of the organization. Our staff is completely
            volunteer. If you would like to make a donation of any amount,
            please feel free to click on the "PayPal" button below. It will take
            you to PayPals website where you can make a donation.
          </p>
          <br />
          <p>
            We appreciate any assistance that you can offer. And please know
            that your donation will be utilized towards rescuing animals that
            would otherwise be left in harm's way without the continued support
            from people like you.
          </p>
          <form
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
            target="_top"
          >
            <input type="hidden" name="cmd" value="_donations" />
            <input
              type="hidden"
              name="business"
              value="chihuahuarescuemidwest@gmail.com"
            />
            <input type="hidden" name="currency_code" value="USD" />
            <input
              type="image"
              src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
              border="0"
              name="submit"
              title="PayPal - The safer, easier way to pay online!"
              alt="Donate with PayPal button"
            />
            <img
              alt=""
              border="0"
              src="https://www.paypal.com/en_US/i/scr/pixel.gif"
              width="1"
              height="1"
            />
          </form>
        </div>
      </div>
    </div>

  </Layout>
)

export default DonatePage

import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import "../CSS/home.css"
import img1 from "../images/chi1.jpg"
import img2 from "../images/chi2.jpeg"
import img3 from "../images/chi3.jpeg"

const images = [img1, img2, img3]

const IndexPage = () => {
  const [image, setImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(
      () => setImage(image => (image + 1) % images.length),

      5 * 1000
    )
    return () => clearInterval(interval)
  })

  return (
    <Layout>
      <div>
        <div className="center">
          <div className="contain">
            <img className="img" alt="" src={images[image]} />
            <div className="text-block">
              <h1>Chihuahua Rescue Midwest</h1>
              <p className="para">
                Thanks for taking a minute to look at our sweet Chihuahua
                friends. We look forward to assisting you in the adoption
                process.{" "}
              </p>
            </div>
          </div>
          <div className="yep">
            <div class="row">
              <div class="column">
                <div className="tagOne">
                  <h1 className="border">Who are we?</h1>
                </div>
                <p className="why">
                  Chihuahua Rescue Midwest is a non profit 501C organization. We
                  are an all volunteer rescue, foster and adoption organization.
                </p>
              </div>
              <div class="column">
                {" "}
                <div className="tagOne">
                  <h1 className="border">Our goal?</h1>
                </div>
                <p className="why">
                  We believe that irresponsible breeding of animals (especially
                  for profit - puppy mills) is unethical and inhumane. We hope
                  that pet owners will consider adoption as their first choice
                  for selecting a new pet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

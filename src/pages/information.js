import React from "react"
import Layout from "../components/layout"
import "../CSS/information.css"
// import "../CSS/body.css"

const InformationPage = () => {
  return (
    <Layout>
      <div>
        <h1>Adoption information</h1>
        <hr />
        <h2>Please note</h2>
        <ul>
          <li>You must be 18 years of age to adopt</li>
          <li>
            We <strong>do not</strong> fly or transport our dogs. We do not
            adopt out of the St Louis MO area(50-75 mile radius)
          </li>
          <li>
            All dogs and cats in the home must be spayed or neutered, up to date
            on vaccinations and have annual visits with their Veterinarian.
          </li>
          <li>
            <strong> A home visit is required of all adoptions</strong>
          </li>
        </ul>
        <hr />

        <h2>How should you start?</h2>
        <ul>
          <li>
            An adoption application must be completed on our website before you
            will be contacted about adopting any dog. If the adoption is not
            completed, it will not be approved and no contact will be made.
          </li>
          <li>
            Please understand that all our representatives are volunteers and
            may not be able to get in touch with you immediately. Please allow
            up to three (3) days for us to get in contact with you.
          </li>
        </ul>
        <hr />

        <h2>Once contacted</h2>
        <ul>
          <li>
            After the initial approval of your application, a representative
            will contact you for a phone interview.
          </li>
          <li>After the phone interview, we will schedule a home visit.</li>
          <li>
            During the home visit, all people residing at the residence must be
            present.
          </li>
        </ul>
        <hr />
        <h2>Home visit</h2>
        <ul>
          <li>
            You must allow the representative into all areas of the property.
            This includes all bedrooms, the basement, and any outdoor buildings.
            If there are any areas our representative are not allowed access to
            the application will be denied.
          </li>
          <li>
            After the home visit, phone interview and application has been
            approved, if you have not met the dog, we will make an appointment
            with our foster home for you to meet the dog
          </li>
          <li>
            <strong>
              Please note it is not always possible to bring the dog with us on
              a home visit.
            </strong>
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export default InformationPage

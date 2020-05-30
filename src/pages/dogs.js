import React from "react"
import "../CSS/dog.css"
import Layout from "../components/layout"

import { useStaticQuery, graphql } from "gatsby"

import DogCard from "../components/dogCard"


const DogsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              name
              age
              weight
              gender
              description
              thumbnail
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div>
        <h1>Dogs available</h1>

        <div className="container1">
          {data.allMarkdownRemark.edges.map(edge => {
            return (
              <DogCard
                name={edge.node.frontmatter.name}
                age={edge.node.frontmatter.age}
                weight={edge.node.frontmatter.weight}
                gender={edge.node.frontmatter.gender}
                descr={edge.node.frontmatter.description}
                picture={edge.node.frontmatter.thumbnail}
              />
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default DogsPage

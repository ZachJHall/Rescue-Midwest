import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from 'gatsby'


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
              }
            }
          }
        }
      }
  `)

  return (
    <Layout>
      <div>
      <div>
      <h1>Dogs Page</h1>
      </div>
      <ol>
        {data.allMarkdownRemark.edges.map((edge) => {
          return (
            <li>
              <h2>{edge.node.frontmatter.name}</h2>
              <p>{edge.node.frontmatter.age}</p>
              <p>{edge.node.frontmatter.weight}</p>
              <p>{edge.node.frontmatter.gender }</p>
              <p>{edge.node.frontmatter.description}</p>

            </li>
          )
        })}
      </ol>
      </div>
    </Layout>
  )
}

export default DogsPage

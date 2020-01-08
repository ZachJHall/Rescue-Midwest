import React from "react"
import Layout from "../components/layout"
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
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
                thumbnail
              }
            }
          }
        }
      }
  `)


  const useStyles = makeStyles(theme => ({
    card: {
      width: 325
    },
    media: {
      height: 0,
      paddingTop: "80%" // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: "rotate(180deg)"
    },
    avatar: {
      backgroundColor: red[500]
    }
  }));




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
                <img src={edge.node.frontmatter.thumbnail} />


              </li>
            )
          })}
        </ol>
      </div>
    </Layout>
  )
}

export default DogsPage

import React from "react"
import Layout from "../components/layout"
import list from "../data/resource.json"
import "../CSS/home.css"

const ListTemplate = props => {
  return (
    <div>
      <ul className="SG">
        <li className="sgLi">
          <div className="box">
            <h3>{props.category}</h3>
            <ul className="df">
              <li className="size">
                <a href={props.link} target="_blank">
                  {props.name}
                </a>
                {props.descr}
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  )
}
const ResourcesPage = () => (
  <Layout>
    <div>
      <h1>Available resources</h1>
      {list.map(p => (
        <ListTemplate
          name={p.name}
          key={p.id}
          link={p.link}
          descr={p.descr}
          category={p.category}
        />
      ))}
      <div className="space"></div>
    </div>
  </Layout>
)

export default ResourcesPage

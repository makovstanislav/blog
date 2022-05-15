import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"


const Sidebar = () => {return (
  <div class="content">
    <div class="has-text-centered mb-4">
      <h1>👋 Hi.</h1>
      <figure class="image">
        <Link to="/">
          <StaticImage src="../images/avatar.jpg" class="is-rounded" alt="avatar" />
        </Link>
      </figure>
      <h2>I'm <a href="/">Stan</a>.</h2>
      <div class="level">
        <div class="level-item">
          <a href="https://github.com/anatoliykmetyuk" target="_blank" rel="noreferrer" class="mr-2">
            <i class="fa-brands fa-github-square fa-2xl"></i>
          </a>
          <a href="https://www.linkedin.com/in/akmetiuk/" target="_blank" rel="noreferrer" class="mr-2">
            <i class="fa-brands fa-linkedin fa-2xl"></i>
          </a>
          <a href="https://twitter.com/akmetiuk" target="_blank" rel="noreferrer" class="">
            <i class="fa-brands fa-twitter-square fa-2xl"></i>
          </a>
        </div>
      </div>
    </div>
    <div>
      <p>💻 I'm a business analyst at fintech startup, who contributes to Scala community in his spare time </p>
    </div>
  </div>
)}

export default Sidebar

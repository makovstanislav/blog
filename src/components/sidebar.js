import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"


const Sidebar = () => {return (
  <div class="content">
    <div class="has-text-centered">
      <h1>👋 Hi.</h1>
      <figure class="image">
        <Link to="/">
          <StaticImage src="../images/avatar.jpg" class="is-rounded" alt="avatar" />
        </Link>
      </figure>
      <h2>I'm <a href="/">Anatolii</a>.</h2>
    </div>
    <div>
      <p>💻I'm a compiler engineer at LAMP/EPFL, working on Scala 3.</p>
      <p>Check out the books I've written:</p>
      <p>📕<a href="https://www.amazon.com/Mastering-Functional-Programming-techniques-programming/dp/1788620798/">Mastering Functional Programming</a> – the motivation behind purely functional libraries such as Cats.</p>
      <p>📕<a href="/assets/files/story-of-one-library.pdf">[Free] A Story of One Library</a> – a commit-by-commit analysis of an application from the very start. The challenges that were arising during the implementation are addressed in a functional way, so that the reader can understand the motivation behind the functional techniques.</p>
    </div>
  </div>
)}

export default Sidebar

import * as React from "react"
import Helmet from "react-helmet"

import Sidebar from "./sidebar"


const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>Anatolii's Programming Blog</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css" />
      </Helmet>
      <main class="columns m-5">
        <div class="column is-one-quarter box m-1">
          <Sidebar />
        </div>
        <div class="column is-three-quarters box m-1">
          {children}
        </div>
      </main>
      <footer class="footer content has-text-centered">
        <p>© Anatolii Kmetiuk, 2016 - 2022</p>
      </footer>
    </>
  )
}

export default Layout
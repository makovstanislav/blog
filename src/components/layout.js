import * as React from "react"
import Helmet from "react-helmet"

import Sidebar from "./sidebar"


const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>Anatolii's Programming Blog</title>
      </Helmet>
      <main class="has-background-light">
        <div class="columns is-gapless">
          <div class="column is-one-quarter is-hidden-mobile">
            <div class="box m-2"><Sidebar /></div>
          </div>
          <div class="column is-three-quarters">
            <div class="box m-2">{children}</div>
          </div>
        </div>
      </main>
      <footer class="footer content has-text-centered">
        <p>© Anatolii Kmetiuk, 2016 - 2022</p>
      </footer>
    </>
  )
}

export default Layout
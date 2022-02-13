import * as React from "react"
import Helmet from "react-helmet"

import Sidebar from "./sidebar"

const columnsContainer = "columns m-5"
const sidebarColumn = "column is-one-quarter box m-1"
const mainColumn = "column is-three-quarters box m-1"

const Layout = ({ children }) => {

  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css" />
      </Helmet>
      <main class={columnsContainer}>
        <div class={sidebarColumn}>
          <Sidebar />
        </div>
        <div class={mainColumn}>
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
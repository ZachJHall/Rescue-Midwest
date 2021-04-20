import React from "react"

import "../CSS/footer.css"

export const Footer = () => {
  return (
    <footer class="footer-basic-centered">
      <p class="footer-company-motto">
        Website Designed by{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          id="carterName"
          href="https://carterwagner.me"
        >
          Carter Wagner
        </a>{" "}
        and{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          id="zachsName"
          href="https://www.zachhall.me/"
        >
          Zach Hall
        </a>
      </p>
    </footer>
  )
}

export default Footer

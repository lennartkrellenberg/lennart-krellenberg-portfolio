import * as React from "react"
import * as style from "../style/global.module.scss"
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Navbar from "../components/navbar/Navbar"





const IndexPage = () => {



  return (
    <div className={style.wrapper}>
      <Helmet>




      </Helmet>

      <section className={style.heroSection}>
        <div className={style.heroContent}>
          <div className={style.heroTop}>
            <div className={style.navbar}>
              <Navbar></Navbar>

            </div>
          </div>
          <div className={style.heroLeft}>
            <h3>Hi, I'm Lennart <span role="img" aria-label="shake-hand">👋🏻</span></h3>
            <h2><span className={style.blue}>App</span> and <span className={style.pink}>Front-End</span> Developer</h2>
            <div className={style.heroButtons}>
              <button className={style.btn1}>Projekte</button>
              <button className={style.btn2}>Kontakt</button>
            </div>
          </div>


          <div className={style.heroRight}>
            <StaticImage className={style.person} src="../images/person.svg"

              alt="Person SVG"
              placeholder="none"

            />

          </div>

        </div>
      </section>
    </div>
  )
}

function changeBackground() {
  var currentTheme = document.documentElement.getAttribute("data-theme");

  // Switch between `dark` and `light`
  var switchToTheme = currentTheme === "dark" ? "light" : "dark"

  // Set our currenet theme to the new one
  document.documentElement.setAttribute("data-theme", switchToTheme);

}




export default IndexPage

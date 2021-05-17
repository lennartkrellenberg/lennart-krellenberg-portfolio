import * as React from "react"
import * as style from "../style/global.module.scss"
import { Helmet } from "react-helmet"
import Person from "../images/person.svg";




const IndexPage = () => {

  return (
    <div className={style.wrapper}>
      <Helmet>

        <script type="text/javascript">
          {
            document.documentElement.setAttribute("data-theme", "dark")}


        </script>
      </Helmet>

      <section className={style.heroSection}>
        <div className={style.heroContent}>
          <div className={style.heroLeft}>
            <h3>Hi, I'm Lennart👋🏻</h3>
            <h2>App and Front-End Developer</h2>
            <div className={style.heroButtons}>
              <button className={style.btn1}>Projekte</button>
              <button className={style.btn2}>Kontakt</button>
            </div>
          </div>


          <div className={style.heroRight}>
            <Person /></div>

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

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

      <section className={style.heroSection} id="home">
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

      <section id={style.work}>
        <div className={style.wrapper}>
          <h3>Meine Projekte</h3>

          <div className={style.projects}>
            <div className={style.project}>
              <div className={style.projectTxt}>
                <h4>Projekt Titel</h4>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                <button>Mehr dazu</button>
              </div>
              <div className={style.projectImg}></div>
            </div>

            <div className={style.project}>
              <div className={style.projectImg}></div>

              <div className={style.projectTxt}>
                <h4>Projekt Titel</h4>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                <button>Mehr dazu</button>
              </div>
            </div>

            <div className={style.project}>
              <div className={style.projectTxt}>
                <h4>Projekt Titel</h4>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                <button>Mehr dazu</button>
              </div>
              <div className={style.projectImg}></div>
            </div>

            <div className={style.project}>
              <div className={style.projectImg}></div>

              <div className={style.projectTxt}>
                <h4>Projekt Titel</h4>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                <button>Mehr dazu</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}





export default IndexPage

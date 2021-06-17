import * as React from "react"
import * as style from "../style/global.module.scss"
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
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
            <div>
              <button className={style.btn1}>Projekte</button>
              <button className={style.btn2}>Kontakt</button>
            </div>
          </div>


          <div className={style.heroRight}>
            <StaticImage className={style.person} src="../images/god.png"
              quality={100}
              alt="Person SVG"
              placeholder="none"

            />

          </div>

        </div>
      </section>

      <section id={style.work}>
        <div className="work">
          <h3>Meine Projekte</h3>

          <div className={style.projects}>
            <div className={style.project}>
              <div className={style.projectTxt}>
                <h4>NFT Info Page</h4>
                <p>Diese Webseite habe ich im Kunstunterricht erstellt. <br /> Sie zeigt, wie Künstler mit Hilfe von NFTs ihre Kunstwerke verkaufen können. <br /> Bei diesem Projekt habe ich mit Gatsby und Flexbox gearbeitet.   </p>
                <button href="https://nftinfopagemain.gatsbyjs.io/" rel="noopener noreferrer" target="_blank">Mehr dazu</button>
              </div>
              <div className={style.projectImg}><StaticImage src="../images/nftImg.png" quality="100"></StaticImage>
              </div>
            </div>

            <div className={style.project}>
              <div className={style.projectImg}><StaticImage src="../images/minimalImg.png" quality="100"></StaticImage></div>

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
              <div className={style.projectImg}><StaticImage src="../images/leonImg.png" quality="100"></StaticImage>
              </div>
            </div>

            <div className={style.project}>
              <div className={style.projectImg}><StaticImage src="../images/travlerImg.png" quality="100"></StaticImage></div>

              <div className={style.projectTxt}>
                <h4>Projekt Titel</h4>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                <button>Mehr dazu</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id={style.tools}>
        <div id="tools">
          <h3>Die Tools</h3>

          <div className={style.toolsFlex}>
            <div className={style.tool}><StaticImage src="../images/flutter.svg" color="#02569B" width={100}></StaticImage></div>
            <div className={style.tool}><StaticImage src="../images/gatsby.svg" color="#02569B" width={100}></StaticImage></div>
            <div className={style.tool}><StaticImage src="../images/github.svg" color="#02569B" width={100}></StaticImage></div>
            <div className={style.tool}><StaticImage src="../images/firebase.svg" color="#02569B" width={100}></StaticImage></div>

          </div>

        </div>
      </section>
    </div>
  )
}





export default IndexPage

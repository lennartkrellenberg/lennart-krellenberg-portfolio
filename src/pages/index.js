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
                <p>Diese Webseite habe ich im Kunstunterricht erstellt. <br /> Sie zeigt, wie Künstler mit Hilfe von NFTs ihre Kunstwerke verkaufen können. <br /> Bei diesem Projekt habe ich mit Gatsby und SCSS gearbeitet.   </p>
                <button href="https://nftinfopagemain.gatsbyjs.io/" rel="noopener noreferrer" target="_blank">Mehr dazu</button>
              </div>
              <div className={style.projectImg}><StaticImage src="../images/nftImg.png" quality="100"></StaticImage>
              </div>
            </div>

            <div className={style.project}>
              <div className={style.projectImg}><StaticImage src="../images/minimalImg.png" quality="100"></StaticImage></div>

              <div className={style.projectTxt}>
                <h4>minimal</h4>
                <p>Mit Hilfe dieser App kann man ganz leicht eine To-Do Liste erstellen, verwalten und sie auf allen Geräten abrufen. Hierbei kann man leicht durch Farben erkennen, ob die Task schnell erledigt werden muss. <br /> Bei diesem Projekt habe ich mit Flutter und Firebase gearbeitet.  </p>
                <button>Mehr dazu</button>
              </div>
            </div>

            <div className={style.project}>
              <div className={style.projectTxt}>
                <h4>leoncarstens.de</h4>
                <p>Diese Website habe ich für Leon Carstens erstellt. Mithilfe der Bildgalerie kriegt man ein guten Einblick in seine Arbeit. <br />  Bei diesem Projekt habe ich mit HTML, CSS und Javascript gearbeitet.   </p>
                <button>Mehr dazu</button>
              </div>
              <div className={style.projectImg}><StaticImage src="../images/leonImg.png" quality="100"></StaticImage>
              </div>
            </div>

            <div className={style.project}>
              <div className={style.projectImg}><StaticImage src="../images/travlerImg.png" quality="100"></StaticImage></div>

              <div className={style.projectTxt}>
                <h4>travler</h4>
                <p>travler ist eine App, die einem verschiedene Städte zeigt, die man besuchen könnte. Außerdem ist geplant, dass man die Städte bewerten kann <br />  Bei diesem Projekt habe ich mit Flutter gearbeitet.  </p>
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

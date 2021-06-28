import * as React from "react"
import * as style from "../style/global.module.scss"
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
import Navbar from "../components/navbar/Navbar"

import { graphql, useStaticQuery } from 'gatsby'
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'
import { Link } from "gatsby"





const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        background: file(relativePath: { eq: "background.webp" }) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          
        }
      }
    `
  )

  // Use like this:
  const bgImage = data.background.childImageSharp.fluid



  return (
    <div>
      <Helmet>




      </Helmet>
      <BackgroundImage
        Tag="section"
        fluid={bgImage}

        preserveStackingContext
      >
        <div className={style.bgOverlay}>

          <section className={style.heroSection, style.wrapper} id="home">
            <div className={style.heroContent}>
              <div className={style.heroTop}>
                <div className={style.navbar}>
                  <Navbar></Navbar>

                </div>
              </div>


              <div className={style.heroLeft}>
                <h5>Hi, I'm Lennart <span role="img" aria-label="shake-hand">👋🏻</span></h5>
                <h2><span className={style.blue}>App</span> and <span className={style.pink}>Front-End</span> Developer</h2>
                <div>
                  <a href="#work"><button className={style.btn1}>Projekte</button></a>
                  <a href="mailto:lennart@lennartkrellenberg.com"><button className={style.btn2}>Kontakt</button></a>
                </div>
              </div>


              <div className={style.heroRight}>


              </div>

            </div>
          </section>
        </div>
      </BackgroundImage>

      <div className={style.wrapper}>

        <section id="aboutme" className={style.aboutme}>
          <h3 className={style.topic}>Über mich</h3>
          <div className={style.aboutContent}>
            <div className={style.aboutLeft}>
              <p className={style.p1}>

                Seit 2015 interessiere ich mich für das programmieren. <br />Das Ganze hat damit angefangen, dass ich mit Freunden einen eigenen Minecraft Server hatte und wir dort eigene Minecraft Plugins und Spielmodi programmieren wollten.
                Dies ließ mich nicht los - also beschäftigte ich mich immer mehr mit der Softwareentwicklung.
                Bei Udemy hatte ich letztendlich einen Kurs gefunden, in dem man die Entwicklung von Android Apps lernen konnte. Das Thema hat mich nachhaltig so sehr interessiert, dass ich mein Schülerpraktikum in der 9. Klasse bei der Softwareagentur Bornholdt Lee gemacht habe. Dort hatte ich dann auch meine erste eigene Android App programmiert. <br />
                Seit ungefähr 1,5 Jahren beschäftige ich mich mit jetzt mit Flutter, um für Android und Ios Apps zu entwickeln.
                <br />
                Nebenbei bei habe ich mich ebenfalls mit dem Gatsby beschäftigt, um für Freunde, die Schule oder einfach zum Spaß Webseiten zu erstellen.

              </p>
            </div>

            <div className={style.aboutRight}>
              <StaticImage className={style.me} src="../images/me.JPG" quality="100"></StaticImage>
            </div>
          </div>
        </section>



        <section id="work" className={style.work}>
          <div >
            <h3 className={style.topic}>Meine Projekte</h3>

            <div className={style.projects}>
              <div className={style.project}>
                <div className={style.projectTxt}>
                  <h4 className={style.topic2}>NFT Info Page</h4>
                  <p className={style.p2}>Diese Webseite habe ich im Kunstunterricht erstellt. <br /> Sie zeigt, wie Künstler mit Hilfe von NFTs ihre Kunstwerke verkaufen können. <br /> Bei diesem Projekt habe ich mit Gatsby und SCSS gearbeitet.   </p>
                  <a href="https://nftinfopagemain.gatsbyjs.io/"><button className={style.buttonText} >Mehr dazu</button></a>
                </div>
                <div className={style.projectImg}><StaticImage src="../images/nftImg.png" quality="100"></StaticImage>
                </div>
              </div>

              <div className={style.project}>
                <div className={style.projectImg}><StaticImage src="../images/minimalImg.png" quality="100"></StaticImage></div>

                <div className={style.projectTxt}>
                  <h4 className={style.topic2}>minimal</h4>
                  <p className={style.p2}>Mit Hilfe dieser App kann man ganz leicht eine To-Do Liste erstellen, verwalten und sie auf allen Geräten abrufen. Hierbei kann man leicht durch Farben erkennen, ob die Task schnell erledigt werden muss. <br /> Bei diesem Projekt habe ich mit Flutter und Firebase gearbeitet.  </p>
                  <a href="https://github.com/lennartkrellenberg/minimal"><button className={style.buttonText}>Mehr dazu</button></a>
                </div>
              </div>

              <div className={style.project}>
                <div className={style.projectTxt}>
                  <h4 className={style.topic2}>leoncarstens.de</h4>
                  <p className={style.p2}>Diese Website habe ich für Leon Carstens erstellt. Mithilfe der Bildgalerie kriegt man ein guten Einblick in seine Arbeit. <br />  Bei diesem Projekt habe ich mit HTML, CSS und Javascript gearbeitet.   </p>
                  <a href="http://leoncarstens.de/"><button className={style.buttonText}>Mehr dazu</button></a>
                </div>
                <div className={style.projectImg}><StaticImage src="../images/leonImg.png" quality="100"></StaticImage>
                </div>
              </div>

              <div className={style.project}>
                <div className={style.projectImg}><StaticImage src="../images/travlerImg.png" quality="100"></StaticImage></div>

                <div className={style.projectTxt}>
                  <h4 className={style.topic2}>travler</h4>
                  <p className={style.p2}>travler ist eine App, die einem verschiedene Städte zeigt, die man besuchen könnte. Außerdem ist geplant, dass man die Städte bewerten kann <br />  Bei diesem Projekt habe ich mit Flutter gearbeitet.  </p>
                  <a href="https://github.com/lennartkrellenberg/travler"><button className={style.buttonText}>Mehr dazu</button></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="tools" className={style.tools}>
          <div id="tools">
            <h3 className={style.topic}>Die Tools</h3>

            <div className={style.toolsFlex}>
              <div className={style.tool}><StaticImage src="../images/flutter.svg" color="#02569B" width={100}></StaticImage></div>
              <div className={style.tool}><StaticImage src="../images/gatsby.svg" color="#02569B" width={100}></StaticImage></div>
              <div className={style.tool}><StaticImage src="../images/github.svg" color="#02569B" width={100}></StaticImage></div>
              <div className={style.tool}><StaticImage src="../images/firebase.svg" color="#02569B" width={100}></StaticImage></div>

            </div>

          </div>
        </section>

        <section className={style.footer}>
          <Link className={style.footerLink} to="/impressum">Impressum</Link>
          <Link className={style.footerLink} to="/datenschutz">Datenschutzerklärung</Link>

        </section>


      </div>

    </div>
  )
}





export default IndexPage

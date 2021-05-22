import * as React from "react"
import * as style from "../style/global.module.scss"
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'




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
          <div className={style.heroTop}>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#features">Features</Nav.Link>
                  <Nav.Link href="#pricing">Pricing</Nav.Link>
                  <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Nav>
                  <Nav.Link href="#deets">More deets</Nav.Link>
                  <Nav.Link eventKey={2} href="#memes">
                    Dank memes
      </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
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

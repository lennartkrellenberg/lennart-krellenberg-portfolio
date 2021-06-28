import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as style from "../../style/global.module.scss"



const Logo = () => {

    return (

        <div className={style.brand}>
            <StaticImage className={style.logo} src="../../images/logo.svg"

                height="85px"
                width="117px"


            />

            <div className={style.brandRight}>
                <h4>Lennart Krellenberg</h4>
                <p>Developer</p>
            </div>

        </div>


    )
}

export default Logo


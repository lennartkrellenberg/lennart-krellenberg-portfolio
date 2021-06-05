import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as style from "../../style/global.module.scss"



const Logo = () => {

    return (
        <StaticImage className={style.logo} src="../../images/logo.svg"

            height="85px"
            width="117px"


        />
    )
}

export default Logo


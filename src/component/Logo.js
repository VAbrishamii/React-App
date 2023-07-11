import React from "react";

import Styles from './Logo.module.css';
import clinique from '../images/clinique.png';
import lancom from "../images/lancom.png";
import loreal from "../images/loreal.png";

const Logo = () => {
    return(
        <div className={Styles.container}>
            <h3>Who Support Us?</h3>
            <div>
                <img src={clinique} alt="support"/>
                <img src={lancom} alt="support"/>
                <img src={loreal} alt="support"/>
            </div>

        </div>
    )
}
export default Logo;
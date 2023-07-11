import React from "react";

import styles from "./Cover.module.css";
import cover from "../images/banner.jpg"




const Cover = () => {
    return(

        <div className={styles.container}>
            <img  className={styles.cover} src={cover} alt="cover"/>
            <div className={styles.textContainer}>
                <h1>Be Kind to Your Skin</h1>
                <p>Beauty is an Attitude</p>

            </div>

        </div>
    );
};

export default Cover;


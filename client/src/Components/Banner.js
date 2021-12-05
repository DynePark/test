import React from "react";
import styles from "./Banner.module.css";

function Banner() {
    return (
        <div className={styles.banner}>
            <img
                src="https://image.freepik.com/free-vector/merry-christmas-banner-template-with-festive-decoration-christmas_255246-1736.jpg"
                alt="christmas banner"
            />
        </div>
    );
}

export default Banner;

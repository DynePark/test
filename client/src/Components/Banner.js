import React from "react";
import styles from "./Banner.module.css";

function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.container}>
                <button className={styles.left}>
                    <i class="fas fa-chevron-left" />
                </button>
                <button className={styles.right}>
                    <i class="fas fa-chevron-right" />
                </button>
                <div className={styles.item}>
                    <img
                        src="https://thumbs.dreamstime.com/z/merry-christmas-colorful-balls-banner-decoration-stars-backgroun-background-text-77218307.jpg"
                        alt="a"
                    />
                </div>
                <div className={styles.item}>
                    <img
                        src="https://thumbs.dreamstime.com/z/christmas-banner-gingerbread-man-cookies-mulled-wine-holiday-decorations-fir-branches-festive-bokeh-lighting-dark-80838264.jpg"
                        alt="a"
                    />
                </div>
                <div className={styles.item}>
                    <img
                        src="https://thumbs.dreamstime.com/z/christmas-decoration-banner-snowy-pine-cones-fir-branch-lights-77616585.jpg"
                        alt="a"
                    />
                </div>
            </div>
        </div>
    );
}

export default Banner;

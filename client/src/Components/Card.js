import React from "react";
import styles from "./Card.module.css";
import CardPublisher from "./CardPublisher";
import { Link } from "react-router-dom";

function Card({ webtoon }) {
    return (
        <div className={styles.card}>
            <a href={webtoon.url}>
                <img
                    className={styles.cover}
                    src={webtoon.image}
                    alt={webtoon.title}
                />
            </a>
            <Link to={`/webtoon/${webtoon.id - 1}`}>
                <div className={styles.title}>{webtoon.title}</div>
            </Link>
            <div className={styles.tag}>
                <CardPublisher publisher={webtoon.publisher} />
                <div className={styles.update}>NEW</div>
            </div>
        </div>
    );
}

export default Card;

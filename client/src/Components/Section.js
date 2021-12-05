import React from "react";
import Card from "./Card";
import styles from "./Section.module.css";

function Section({ publisher, webtoons }) {
  return (
    <div className={styles.section}>
      <div className={`${styles.title} ${styles[publisher]}`}>{publisher}</div>
      <div className={styles.cards}>
        {webtoons.map((webtoon) => (
          <Card key={webtoon.id} webtoon={webtoon} />
        ))}
      </div>
    </div>
  );
}

export default Section;

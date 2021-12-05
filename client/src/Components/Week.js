import React from "react";
import styles from "./Week.module.css";

function Week() {
    let now = new Date();
    const week = ["월", "화", "수", "목", "금", "토", "일"];
    let dayOfWeek = week[now.getDay() - 1];
    console.log(dayOfWeek);
    return (
        <div className={styles.week}>
            <ul>
                {week.map((day) => (
                    <li>{day}</li>
                ))}
            </ul>
        </div>
    );
}

export default Week;

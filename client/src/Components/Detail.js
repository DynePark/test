import React from "react";
import styles from "./Detail.module.css";

function Detail({ webtoon }) {
    return (
        <div className={styles.detail}>
            <div className={styles.image}>
                <img src={webtoon.image} alt={webtoon.title} />
            </div>
            <div className={styles.contents}>
                <div className={styles.text}>
                    <h2>{webtoon.title}</h2>
                    <h3>{webtoon.synopsis}</h3>
                    <span>{webtoon.author}</span>
                    <span>{webtoon.genre}</span>
                    <span>{webtoon.publisher}</span>
                </div>
                <div className={styles.buttons}>
                    <a href={webtoon.url}>
                        <button>첫회보기</button>
                    </a>
                    <button>웹툰목록</button>
                    <button>
                        <i class="far fa-bookmark"></i>
                    </button>
                    <button>
                        <i class="far fa-thumbs-up"></i>
                        <span>123</span>
                    </button>
                    <button>
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Detail;

import React from "react";
import styles from "./Main.module.css";
import dummy from "../db/data.json";
import Section from "./Section";

function Main() {
    let EveryWebtoons = dummy.webtoons;

    let NaverWebtoons = EveryWebtoons.filter(function (webtoon) {
        return webtoon.publisher === "Naver";
    });
    let KakaoWebtoons = EveryWebtoons.filter(function (webtoon) {
        return webtoon.publisher === "Kakao";
    });
    let KakaopageWebtoons = EveryWebtoons.filter(function (webtoon) {
        return webtoon.publisher === "Kakaopage";
    });
    let EtcWebtoons = EveryWebtoons.filter(function (webtoon) {
        return webtoon.publisher === "Bufftoon";
    });

    return (
        <div className={styles.main}>
            <Section webtoons={NaverWebtoons} publisher="Naver" />
            <Section webtoons={KakaoWebtoons} publisher="Kakao" />
            <Section webtoons={KakaopageWebtoons} publisher="Kakaopage" />
            <Section webtoons={EtcWebtoons} publisher="etc" />
        </div>
    );
}

export default Main;

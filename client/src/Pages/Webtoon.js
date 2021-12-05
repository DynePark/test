import React from "react";
import Detail from "../Components/Detail";
import dummy from "../db/data.json";
import Gnb from "../Components/Gnb";
import Header from "../Components/Header";
import { useParams } from "react-router-dom";

function Webtoon() {
    let { id } = useParams();
    let webtoons = dummy.webtoons;

    return (
        <div>
            <Header />
            <Gnb />
            <Detail webtoon={webtoons[id]} />
        </div>
    );
}

export default Webtoon;

import React from "react";
import Banner from "../Components/Banner";
import Gnb from "../Components/Gnb";
import Header from "../Components/Header";
import Main from "../Components/Main";

function Home() {
    return (
        <div>
            <Header />
            <Gnb />
            <Banner />
            <Main />
        </div>
    );
}

export default Home;

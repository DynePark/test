import React from "react";
import Gnb from "../Components/Gnb";
import Header from "../Components/Header";
import Main from "../Components/Main";
import Week from "../Components/Week";

function Weekday() {
    return (
        <div>
            <Header />
            <Gnb />
            <Week />
            <Main />
        </div>
    );
}

export default Weekday;

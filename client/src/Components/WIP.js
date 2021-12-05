import React from "react";
import Header from "./Header";
import Gnb from "./Gnb";
import { Link } from "react-router-dom";

function WIP() {
    const tempStyle = {
        background: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
    };

    const tempStyle2 = {
        maxWidth: "700px",
    };
    return (
        <div>
            <Header />
            <Gnb />
            <Link to="/">
                <div style={tempStyle}>
                    <img
                        style={tempStyle2}
                        src="https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-page-templates.jpg.webp"
                    />
                </div>
            </Link>
        </div>
    );
}

export default WIP;

import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
    return (
        <header>
            <Link to="/">
                <div className={styles.logo}>
                    {/* <img src="" alt="Mainlogo"/> */}
                    <h2>WebtoonMoa</h2>
                </div>
            </Link>
            <div className={styles.icons}>
                <i class="fas fa-search"></i>
                <i class="fas fa-folder-open"></i>
                <Link to="/login">
                    <i class="fas fa-user"></i>
                </Link>
                <i class="fas fa-bars"></i>
            </div>
        </header>
    );
}

export default Header;

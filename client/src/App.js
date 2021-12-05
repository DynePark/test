import React from "react";
import styles from "./App.module.css";
import Home from "./Pages/Home";
import Webtoon from "./Pages/Webtoon";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import Registerpage from "./Pages/RegisterPage";
import WIP from "./Components/WIP";
import Weekday from "./Pages/Weekday";

function App() {
    return (
        <div className={styles.App}>
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route path="register" element={<Registerpage />}></Route>
                <Route path="login" element={<LoginPage />}></Route>
                <Route path="/webtoon/:id" element={<Webtoon />}></Route>
                <Route path="/weekday" element={<Weekday />}></Route>
                <Route path="*" element={<WIP />}></Route>
            </Routes>
        </div>
    );
}

export default App;

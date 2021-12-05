import React from "react";
import styles from "./CardPublisher.module.css";

function CardPublisher({ publisher }) {
    const NaverLogo =
        "https://play-lh.googleusercontent.com/yEh_3Tn28fJWRW6q9GkiUjl6YKNHAllQLEeQ63gS4rF5hpobUbic0jq4bS6BfP80g1E";
    const KakaoLogo =
        "https://w.namu.la/s/19f5063a335f30af3b88ee90fde373d950eb44d737133ec0ba0e87a4d8121075ea0355fc86de225b0d95ba98d2a9772b8b81b2beb74a1c3ad9a76189762bdc6d98426cab0205a9f37845f8a10f879f1f";
    const KakaopageLogo =
        "https://upload.wikimedia.org/wikipedia/commons/8/8f/Kakao_page_logo.png";
    const BufftoonLogo =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAMAAAAKE/YAAAAAqFBMVEUAVv////8AWP8APv8ANf+Qr/+0yf8AO/+4yf8ATf8AU/8AQv/m6v/B1f8AOf9Vif8mcf8AWv8ASf8AMf8ARf8AUf8ARP8AS/8AXf9ejv+8zv9ikf/Q2/9mlf8AHv97ov/t8f+btf8FZ/9ymv/V4P+MrP88ev+sw/8AYf/M1/8sc//s7f/i5P+gu/86b/+Kp//4+P9chv9HgP9Tef86eP8AF/90nv8AKf+yneQAAAADkUlEQVR4nO2c627aQBBGjW1wwOAAtrknhEtCILQQkqbv/2at3EaJZuFH629GdfWdBxgfWYt3Lrt4HiGEEEIIIYQQQgghhBBCCCH/Gb4lGOVeEFqS9xDS/WndkEU3Q0iHs5olyxghHV1ZOk8ShLOx9CqFrGlb6WWAcLaVXsd59aTvQ8jqsJV+CDG7i6X0Me9DnE2lNwloG7eUHqcVlH6EbIe20tugVT3pOWp1WErvoupJt/tNkPMZ6ac2gv2TjPsFtLOclf6KSGr89CDjXmtKL8NmebJEFhfHHqRouSANedPBUoadYLLSAh3pXrqSYUH5f4HSm04mKmF/oyOd+UcRdZ1h8v8CFWk/vJZR67Dt0FOS7qULGfWE++ApSef9tggKy/8LNKT9aCeDNkKE7Dsq0ulcBp0iV4fO8gi2Migs/y/QkB6MZMwZLP8vUJD2U+eDdwBuh56OdLiRMV9RdfgvFKSHzTsRst2E5f8FCtLJgwwJzP8L8NJ+ei9DAvP/Arx0K16LiMcRLv8vwEvr5v8FcGk/vZER37AfPI03HTWciBHG9eMRjnQ3KPOr8fuezP/bfWD+X+BKj74HJYhvnQ8eNP+/IP082nX/np3nbIfQ/P+CNJqjh8z/jaSx+b+R9A18SRtIY8bhttJrbP5vI40aeJpKg/N/E+k9rv9vJ42a4ZtK17qw8ZCh9LyKP8QtOi+1kK6NBhWUHsOTPANpdP/ARPouH+pLr16uy/DSkQFfDYoA7zYpQfTtJAMeDMqtn4VtGbKRM9iCb4oKzRpnfYCOEH6Ab9aEbzLiFL0+FJo1XRnxCnMs9tMj4NJ55szj0PW4Rqt3IUOiOx8K0qHz0VuAO5AKk4BMvZunMZJLwE1NB5WRnHaHWuNNu7OADrYS0JB2py417NRFZ6CvPN9SkdaeJKqcQmjmcmZ7N0T2bJTOMJ2ZjgNk39E5wxSOZVRoJaBzxG3wKKPOYmDHV0e6daYSAPbWtY5tuqeYKnBs06kEYPdFvLPSUas8Q9VK4NzENi5PduusjxPuVbvSs0kHQMNJP+qaJ9W12OPaH4ZXRnAnqA2l36p4OQd0K9hWuga7f2Ep/VzFq32wSsBSGlYJmF4M3oE2RVNp1CDUVBp199P2bwVAp+xtpaeY9WErvcF89ELnooQqmPZYPJ807OjsIIu6l5U5WfrHtEB7Iv4E2r/xLEIIIYQQQgghhBBCCCGEEEK0+QHXtGwjpabCqgAAAABJRU5ErkJggg==";

    return (
        <div className="cardPublisher">
            {publisher === "Naver" ? (
                <img
                    className={styles.publisherName}
                    src={NaverLogo}
                    alt="logo"
                />
            ) : null}
            {publisher === "Kakao" ? (
                <img
                    className={styles.publisherName}
                    src={KakaoLogo}
                    alt="logo"
                />
            ) : null}
            {publisher === "Kakaopage" ? (
                <img
                    className={styles.publisherName}
                    src={KakaopageLogo}
                    alt="logo"
                />
            ) : null}
            {publisher === "Bufftoon" ? (
                <img
                    className={styles.publisherName}
                    src={BufftoonLogo}
                    alt="logo"
                />
            ) : null}
        </div>
    );
}

export default CardPublisher;

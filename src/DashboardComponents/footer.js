import React from "react";
import "./DashboardComponents.css";
import { FaInstagramSquare,FaYoutube,FaTiktok } from "react-icons/fa";
export default function Footer() {
    const handleOpen = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                <h5>TAKE YOUR FIRST STEP TODAY</h5>
                <h1>Start Your Transformation</h1>
                <button className="join-team-btn-3" onClick={() => handleOpen("#join")}>JOIN MY TEAM</button>
                <div className="social-icons">
                    <h1 className="social-app-logo" onClick={() => handleOpen("https://youtube.com")}><FaYoutube /></h1>
                    <h1 className="social-app-logo" onClick={() => handleOpen("https://instagram.com")}><FaInstagramSquare /></h1>
                    <h1 className="social-app-logo" onClick={() => handleOpen("https://tiktok.com")}><FaTiktok /></h1>
                </div>
            </div>
            
        </footer>
    );
}

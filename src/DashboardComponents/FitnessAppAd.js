import React from "react";
import "./DashboardComponents.css";

export default function FitnessAppAd() {
    return (
        <div className="fitness-app-ad">
            <div className="ad-left">
                <img 
                    src="https://cdn.prod.website-files.com/63ee73dbb0866dab88360fd9/63f8dbcaffb34ddc2ed68c33_Tyler-AppIcon.svg" 
                    alt="Tyler Path Logo"
                    className="logo"
                />
                <h3>TYLER PATH FITNESS APP</h3>
                <h1>Personalized workout routines delivered via the app.</h1>
                <div className="button-joinTeam-2">
                            <button className="join-my-team">JOIN MY TEAM</button>
                        </div>
            </div>
            <div className="ad-right">
                <img 
                    src="https://cdn.prod.website-files.com/63ee73dbb0866dab88360fd9/6401c18d28960a42cde1f2c2_APp-p-1080.png" 
                    alt="App Screens"
                    className="app-image"
                />
            </div>
        </div>
    );
}

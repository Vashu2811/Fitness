import React from "react";
import "./Homepage.css";

export default function Intropage() {
    return (
        <div>
            <div className="homepage">
                <video autoPlay loop muted className="background-video">
                    <source src="https://cdn.prod.website-files.com/63ee73dbb0866dab88360fd9/652d90374cdf96ac835fd323_Tyler-vid-1-transcode.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="Display-content">
                    <div></div>
                    <div></div>
                    <div></div>

                    <div>
                        <div className="moving-text">
                            FINALLY GAIN CONFIDENCE IN THE GYM
                        </div>
                        <div className="physique-text">
                            <h1>& unlock the path to your dream physique</h1>
                        </div>
                        <div className="button-joinTeam">
                            <button className="join-my-team">JOIN MY TEAM</button>
                        </div>
                        <div className="fitness-logo">
                            <img alt="logo" src="https://cdn.prod.website-files.com/63ee73dbb0866dab88360fd9/652d931d3a0fa615a52d38eb_logo-w.svg" className="logo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
    
}
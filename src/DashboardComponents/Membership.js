import React from "react";
import "./DashboardComponents.css";


export default function Membership() {
    const features = [
        { title: "WORKOUTS", description: "Customized workout plans" },
        { title: "NUTRITION", description: "Delicious meal recipes & nutrition planning" },
        { title: "HABITS", description: "Daily Habit tracking" },
        { title: "ACCOUNTABILITY", description: "Weekly check-ins through the app" },
    ];
    return (
        <div className="iphone-video-container">
            <div className="Display-content-screen">
            <div className="Left-content">
                <div className="iphone-frame">
                    <div className="text-center"><h2 className="h2-text">TYLER PATH FITNESS</h2>
                    <h1 className="h1-text">Exclusive Membership </h1>
                    <div className="button-joinTeam-2">
                            <button className="join-my-team">JOIN MY TEAM</button>
                        </div></div>
                    <img
                        src="https://cdn.prod.website-files.com/63ee73dbb0866dab88360fd9/6508322af2cb4730bf734125_iphone.svg"
                        alt="iPhone Frame"
                        className="iphone-image"
                    />
                    <div className="video-container">
                        <video autoPlay loop muted className="iphone-video">
                            <source src="https://cdn.prod.website-files.com/63ee73dbb0866dab88360fd9/66509210d843ef6c7b86feb7_videoframe_1949-transcode.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    
                </div>
                
            </div>
            <div className="Right-content">
            {features.map((feature, index) => (
                <div key={index} className="feature-card">
                    <div className="feature-title">{feature.title}</div>
                    <div className="feature-description">{feature.description}</div>
                </div>
            ))}
            </div>
            </div>
        </div>
    );
}

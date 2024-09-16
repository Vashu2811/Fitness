import React, { useState } from "react";
import "./DashboardComponents.css";
import { FaLongArrowAltDown } from "react-icons/fa";
import Membership from "./Membership";
import MyStory from "./mystory";
import FitnessAppAd from "./FitnessAppAd";
import Footer from "./footer";

export default function WatchVideo() {
    const [step, setStep] = useState(1);
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        fitnessGoal: "",
        age: "",
        gender: "",
        coachingConsent: "",
        reason: "",
        firstName: "",
        lastName: "",
        phone: "",
        email: ""
    });

    const handleNext = () => {
        // Validation for each step
        if (step === 1 && !formData.fitnessGoal) {
            setError("Please select your primary fitness goal.");
        } else if (step === 2 && !formData.age) {
            setError("Please enter your age. Coaching is 18+.");
        } else if (step === 3 && !formData.gender) {
            setError("Please select your gender.");
        } else if (step === 4 && !formData.coachingConsent) {
            setError("Please confirm if you want to continue.");
        } else if (step === 5 && !formData.reason) {
            setError("Please tell us why you want to work with me specifically.");
        } else {
            setError("");
            setStep(step + 1);
        }
    };

    const handlePrevious = () => {
        setStep(step - 1);
        setError("");
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="watchvideo">
            <div className="Title">
                <h1>Watch this BEFORE you sign up!</h1>
            </div>
            <div className="Title">
                <h1>
                    <FaLongArrowAltDown /><FaLongArrowAltDown /><FaLongArrowAltDown />
                </h1>
            </div>

            {/* Use an iframe to embed Vimeo video */}
            <div className="play-video">
                <iframe 
                    src="https://player.vimeo.com/video/923442075?app_id=122963" 
                    width="800" 
                    height="500" 
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture" 
                    allowFullScreen
                    title="Watch Before Sign Up"
                ></iframe>
            </div>
            <div className="questionnaire">
            {step === 1 && (
                <div>
                    <h2>What is your primary fitness goal?</h2>
                    <label>
                        <input type="radio" name="fitnessGoal" value="Lose weight" onChange={handleChange} /> Lose weight
                    </label>
                    <label>
                        <input type="radio" name="fitnessGoal" value="Build muscle" onChange={handleChange} /> Build muscle
                    </label>
                    <label>
                        <input type="radio" name="fitnessGoal" value="Improve endurance" onChange={handleChange} /> Improve endurance
                    </label>
                    <label>
                        <input type="radio" name="fitnessGoal" value="Overall health" onChange={handleChange} /> Overall health
                    </label>
                </div>
            )}
            {step === 2 && (
                <div>
                    <h2>How old are you? My coaching is 18+.</h2>
                    <input type="number" name="age" value={formData.age} onChange={handleChange} />
                </div>
            )}
            {step === 3 && (
                <div>
                    <h2>What is your gender?</h2>
                    <label>
                        <input type="radio" name="gender" value="Male" onChange={handleChange} /> Male
                    </label>
                    <label>
                        <input type="radio" name="gender" value="Female" onChange={handleChange} /> Female
                    </label>
                    <label>
                        <input type="radio" name="gender" value="Other" onChange={handleChange} /> Other
                    </label>
                </div>
            )}
            {step === 4 && (
                <div>
                    <h2>This application is for paid 1:1 coaching. Do you want to continue?</h2>
                    <label>
                        <input type="radio" name="coachingConsent" value="Yes" onChange={handleChange} /> Yes
                    </label>
                    <label>
                        <input type="radio" name="coachingConsent" value="No" onChange={handleChange} /> No
                    </label>
                </div>
            )}
            {step === 5 && (
                <div>
                    <h2>Why do you want to work with me specifically?</h2>
                    <textarea name="reason" value={formData.reason} onChange={handleChange}></textarea>
                </div>
            )}
            {step === 6 && (
                <div>
                    <h2>Please provide your personal details</h2>
                    <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
                    <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
                    <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                </div>
            )}

            {error && <p className="error">{error}</p>}

            <div className="buttons">
                {step > 1 && <button onClick={handlePrevious}>Previous</button>}
                {step < 6 && <button onClick={handleNext}>Next</button>}
                {step === 6 && <button onClick={() => alert("Form submitted!")}>Submit</button>}
            </div>
        </div>
        <div className="membership">
            <Membership />
        </div>
        <div><MyStory /></div>
        <div><FitnessAppAd /></div>
        <div><Footer /></div>
        </div>
    );
}

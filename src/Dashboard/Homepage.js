import React from "react";
import "./Homepage.css";
import Watchvideo from "../DashboardComponents/watchvideo";
import Intropage from "./intropage";



export default function HomePage() {
    return (
        <div>
            <div><Intropage /></div>
        <div><Watchvideo /></div>
        </div>
    )
}

import React from "react";

export default function Header() {
    return(
        <header className="header">
            <div className="left-section">
                <img src="../images/meme.png" className="header-img"/>
                <h1>Meme Generator</h1>
            </div>
            <div className="right-section">
                <h3>React Course - Project 03</h3>
            </div>
        </header>
    )
}
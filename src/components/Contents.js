import React from "react";
import memesData from "../memesData.js"

export default function Contents() {

    function getMemeImage() {
        console.log("Hover!");
    }

    return(
        <main className="main">
            <form className="form">
                <input type="text" className="input-text" placeholder="Top Text"/>
                <input type="text" className="input-text" placeholder="Bottom Text"/>
                <button onClick={getMemeImage} className="btn">Get new meme image 🖼️</button>
            </form>
            <img src="../images/img.jpg" className="meme-img"/>
        </main>
    )
}
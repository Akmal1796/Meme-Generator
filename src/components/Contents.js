import React from "react";
import memesData from "../memesData.js"

export default function Contents() {

    function getMemeImage() {
        const memeArray = memesData.data.memes;
        const randumNUM = Math.floor(Math.random() * memeArray.length);const url = memeArray[randumNUM].url;/* const {url} = memeArray[randumNUM] */
        console.log(url);
    }

    const things = ["Thing 1", "Thing 2"];

    const thingsElements = things.map(thing => <p key={thing}>{thing}</p>);

    function clickHandle() {
        const thingText = `Thing ${things.length + 1}`;
        things.push(thingText);
        console.log(things);
    }

    /* React State */

/*     const result = React.useState("Yes"); */

        /* React State Destructuring */
    const [result, func] = React.useState("Yes");

    return(
        <main className="main">
            <div className="form">
                <input type="text" className="input-text" placeholder="Top Text"/>
                <input type="text" className="input-text" placeholder="Bottom Text"/>
                <button onClick={getMemeImage} className="btn">Get new meme image 🖼️</button>
            </div>
            <img src="../images/img.jpg" className="meme-img"/>
            <div>
                <button onClick={clickHandle}>Add Item</button>
                {thingsElements}
                <p>{result}</p>
            </div>
        </main>
    )
}
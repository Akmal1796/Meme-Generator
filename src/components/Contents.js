import React from "react";
import memesData from '../memesData';

export default function Contents() {    

    const [memeImage, setMemeImage] = React.useState('');

    function getMemeImage() {
        const memeArray = memesData.data.memes;
        const randumNUM = Math.floor(Math.random() * memeArray.length);const url = memeArray[randumNUM].url;/* const {url} = memeArray[randumNUM] */
        //console.log(url);
        setMemeImage(memeArray[randumNUM].url)
    }

    return(
        <main className="main">
            <div className="form">
                <input type="text" className="input-text" placeholder="Top Text"/>
                <input type="text" className="input-text" placeholder="Bottom Text"/>
                <button onClick={getMemeImage} className="btn">Get new meme image 🖼️</button>
            </div>
            <img src={memeImage} className="meme-img"/>
        </main>
    )
}
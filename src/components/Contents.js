import React from "react";
import memesData from '../memesData';

export default function Contents() {    

    //const [memeImage, setMemeImage] = React.useState('');

    const [meme, setMeme] = React.useState(
        {
            topText: '',
            bottomText: '',
            randomImage: ''
        }
    )

    const [allMemeImages, setAllMemeImages] = React.useState(memesData);

    function getMemeImage() {
        const memeArray = allMemeImages.data.memes;
        const randumNUM = Math.floor(Math.random() * memeArray.length);const url = memeArray[randumNUM].url;/* const {url} = memeArray[randumNUM] */
        //console.log(url);
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    return(
        <main className="main">
            <div className="form">
                <input type="text" className="input-text" placeholder="Top Text"/>
                <input type="text" className="input-text" placeholder="Bottom Text"/>
                <button onClick={getMemeImage} className="btn">Get new meme image 🖼️</button>
            </div>
            <img src={meme.randomImage} className="meme-img"/>
        </main>
    )
}
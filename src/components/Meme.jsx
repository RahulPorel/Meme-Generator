import { useEffect, useState } from "react";
import memesData from "./memeData";

export default function Meme() {
  // const [memeImage, setMemeImage] = useState("");

  const [meme, setMeme] = useState({
    topTxt: "",
    bottomTxt: "",
    randomImg: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = useState(memesData);

  useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes ");
      const data = await res.json();
      setAllMemes(data.data.memes);
    }
    getMemes();
    }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);

    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImg: url,
      };
    });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }

  return (
    <main>
      <div className="form" action="#">
        <input
          id="top-txt"
          className="form-input"
          type="text"
          placeholder="Top text"
          name="topTxt"
          value={meme.topTxt}
          onChange={handleChange}
        />

        <input
          id="bottom-txt"
          className="form-input"
          type="text"
          placeholder="Bottom text"
          name="bottomTxt"
          value={meme.bottomTxt}
          onChange={handleChange}
        />
        <button onClick={getMemeImage} className="form-btn">
          Get a new image
        </button>
      </div>

      <div className="meme">
        <img src={meme.randomImg} className="meme--image" />
        <h2 className="meme--text top">{meme.topTxt}</h2>
        <h2 className="meme--text bottom">{meme.bottomTxt}</h2>
      </div>
    </main>
  );
}

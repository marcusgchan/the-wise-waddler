import React from "react";
import styles from "./styles/Homepage.module.css";
<<<<<<< HEAD
import { useState, useEffect } from "react";
import axios from "axios";

const INSPIRATIONAL_QUOTE_URL = "https://zenquotes.io/api/random";
const JOKE_URL = "https://icanhazdadjoke.com/api";
=======
import DuckClosedMouth from "../img/DuckClosedMouth.svg";
import DuckOpenMouth from "../img/DuckOpenMouth.svg";
>>>>>>> b23da179005b319c25fd58bb1a2a9a35000d9de6

const Homepage = () => {
  const [quote, setquote] = useState({
    id: 1,
    quote: "Welcome traveller, I am the wise waddler. What wisdom do you seek?",
  });

  function quackify() {}

  function unQuackify() {}

  function getJoke() {
    axios
      .get(JOKE_URL)
      .then((res) => res.data)
      .then((quote) => console.log(quote));
  }

  function getQuote() {
    axios
      .get(INSPIRATIONAL_QUOTE_URL)
      .then((res) => res.data)
      .then((quote) => console.log(quote));
  }

  function saveQuote() {}

  function seeQuotes() {}

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <h1 className={styles.title}> The Wise Waddler</h1>
        <p className={styles.quote}> {quote.quote} </p>
        <img src="" alt="" className={styles.img}></img>
        <button className={styles.changeB}> Get the real quote </button>
        <button className={styles.quoteB} onClick={getQuote}>
          Ask for wisdom
        </button>
        <button className={styles.jokeB} onClick={getJoke}>
          Ask for laughter
        </button>
        <input type="range" className={styles.slider} />
        <button className={styles.saveB} onClick={saveQuote}>
          Save the quote
        </button>
        <button className={styles.viewB} onClick={seeQuotes}>
          See the saved quotes
        </button>
      </div>
    </div>
  );
};

export default Homepage;

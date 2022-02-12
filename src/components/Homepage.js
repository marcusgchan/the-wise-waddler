import React from "react";
import styles from "./styles/Homepage.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import DuckClosedMouth from "../img/DuckClosedMouth.svg";
import DuckOpenMouth from "../img/DuckOpenMouth.svg";

const INSPIRATIONAL_QUOTE_URL = "https://api.kanye.rest";
const JOKE_URL = "https://icanhazdadjoke.com/api";
const NO_QUACK = 0;
const MID_QUACK = 1;
const FULL_QUACK = 2;

const SLIDER_CONFIG = {
  defaultValue: 0,
  minValue: 0,
  maxValue: 2,
  step: 1,
};

const Homepage = () => {
  const [quote, setQuote] = useState({});
  const [savedQuotes, setSavedQuotes] = useState([]);
  const [open, setOpen] = useState(false);
  const [slider, setSlider] = useState(SLIDER_CONFIG.defaultValue);

  function quackify() {
    setOpen((open = true));

    if (slider === NO_QUACK) {
    } else if (slider === MID_QUACK) {
    } else if (slider === FULL_QUACK) {
    }
  }

  function getJoke() {
    axios
      .get(JOKE_URL)
      .then((res) => res.data)
      .then(({ quote }) =>
        setQuote({
          id: quote,
          originalQuote: quote,
          quackifyQuote: quackify(quote),
        })
      );
  }

  function getQuote() {
    axios
      .get(INSPIRATIONAL_QUOTE_URL)
      .then((res) => res.data)
      .then(({ quote }) =>
        setQuote({
          id: quote,
          originalQuote: quote,
          quackifyQuote: quackify(quote),
        })
      );
  }

  function saveQuote() {}

  function seeQuotes() {}

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <h1 className={styles.title}> The Wise Waddler</h1>
        <p className={styles.quote}> {quote.quote} </p>
        <img
          src={"../img/DuckClosedMouth.svg"}
          alt=""
          className={styles.img}
        ></img>
        <button
          className={`${styles.quoteB} ${styles.button}`}
          onClick={getQuote}
        >
          Ask for wisdom
        </button>
        <button
          className={`${styles.jokeB} ${styles.button}`}
          onClick={getJoke}
        >
          Ask for laughter
        </button>
        <input
          type="range"
          list="tickmarks"
          className={styles.slider}
          min={SLIDER_CONFIG.minValue}
          max={SLIDER_CONFIG.maxValue}
          step={SLIDER_CONFIG.step}
          value={slider}
          onChange={(e) => {
            console.log(e.target.value);
            setSlider(e.target.value);
          }}
        />
        <datalist id="tickmarks">
          <option value="0" label="no quack :("></option>
          <option value="1" label="Quack!"></option>
          <option value="2" label="FULL QUACK"></option>
        </datalist>
        <button
          className={`${styles.saveB} ${styles.button}`}
          onClick={saveQuote}
        >
          Save the quote
        </button>
        <button
          className={`${styles.viewB} ${styles.button}`}
          onClick={seeQuotes}
        >
          See the saved quotes
        </button>
      </div>
    </div>
  );
};

export default Homepage;

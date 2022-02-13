import React from "react";
import styles from "./styles/Homepage.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import DuckClosedMouth from "../img/DuckClosedMouth.svg";
import DuckOpenMouth from "../img/DuckOpenMouth.svg";
import TextBubble from "../img/SpeachBubble01.svg";
import nouns from "../NounsArray.js";
import verbs from "../VerbsArray.js";
import adjectives from "../AdjectivesArray.js";

const INSPIRATIONAL_QUOTE_URL = "https://api.kanye.rest";
const JOKE_URL =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
const QUACK_CONFIG = {
  noQuack: 0,
  quack: 1,
  fullQuack: 2,
};

const SLIDER_CONFIG = {
  defaultValue: 0,
  minValue: 0,
  maxValue: 2,
  step: 1,
};

const Homepage = () => {
  const [quote, setQuote] = useState({});
  const [savedQuotes, setSavedQuotes] = useState([]);
  const [isQuacking, setIsQuacking] = useState(false);
  const [slider, setSlider] = useState(SLIDER_CONFIG.defaultValue);

  function quackify(quote) {
    let quackifyQuote = quote;

    for (let i = 0; i < nouns.length; i++) {
      quackifyQuote = quackifyQuote.replace(nouns[i], " Duck");
    }

    return quackifyQuote;
  }

  function fullQuackify(quote) {
    let fullQuackifyQuote = quote;

    for (let i = 0; i < nouns.length; i++) {
      fullQuackifyQuote = fullQuackifyQuote.replace(nouns[i], " Duck");
    }

    for (let i = 0; i < verbs.length; i++) {
      fullQuackifyQuote = fullQuackifyQuote.replace(verbs[i], " Quack");
    }

    for (let i = 0; i < adjectives.length; i++) {
      fullQuackifyQuote = fullQuackifyQuote.replace(adjectives[i], " Quacky");
    }

    return fullQuackifyQuote;
  }

  function getJoke() {
    axios
      .get(JOKE_URL)
      .then((res) => res.data.joke)
      .then((quote) => {
        setQuote({
          id: quote,
          originalQuote: quote,
          quackifyQuote: quackify(quote),
          fullQuackifyQuote: fullQuackify(quote),
        });
      });
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
          fullQuackifyQuote: fullQuackify(quote),
        })
      );
  }

  function saveQuote(quote) {
    setSavedQuotes([...savedQuotes, quote]);
  }

  function seeQuotes() {
    //sending saved quotes to next page
  }

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <h1 className={styles.title}> The Wise Waddler</h1>
        <p className={styles.quote}>
          {slider === QUACK_CONFIG.noQuack && quote.originalQuote}
          {slider === QUACK_CONFIG.quack && quote.quackifyQuote}
          {slider === QUACK_CONFIG.fullQuack && quote.fullQuackifyQuote}
          <span className={styles.triangle}></span>
        </p>
        <img src={DuckOpenMouth} alt="" className={styles.img}></img>
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
        <p className={styles.sliderTitle}> Quackify: </p>
        <input
          type="range"
          list="tickmarks"
          className={styles.slider}
          min={SLIDER_CONFIG.minValue}
          max={SLIDER_CONFIG.maxValue}
          step={SLIDER_CONFIG.step}
          value={slider}
          onChange={(e) => setSlider(e.target.valueAsNumber)}
        />

        <datalist id="tickmarks">
          <option value="0"></option>
          <option value="1"></option>
          <option value="2"></option>
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

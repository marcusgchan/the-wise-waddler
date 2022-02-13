import React from "react";
import styles from "./styles/QuotesPage.module.css";
import NotePad from "../img/NotePad.svg";

const QuotesPage = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.headingContainer}>
          <h1 className={styles.heading}>Saved Quotes</h1>
          <img src={NotePad} alt="" className={styles.notePad} />
        </div>
        <section className={styles.inputQuotesContainer}>
          <input type="text" className={styles.search} />
          <div className={styles.quotesContainer}>
            <Row quote="random stuffs here adfadfdsaf dsfa sf " />
            <Row quote="random stuffs here adfadfdsaf dsfa sf " />
            <Row quote="random stuffs here adfadfdsaf dsfa sf " />
            <Row quote="random stuffs here adfadfdsaf dsfa sf " />
            <Row quote="random stuffs here adfadfdsaf dsfa sf " />
            <Row quote="random stuffs here adfadfdsaf dsfa sf " />
            <Row quote="random stuffs here adfadfdsaf dsfa sf " />
            <Row quote="random stuffs here adfadfdsaf dsfa sf " />
            <Row quote="random stuffs here adfadfdsaf dsfa sf " />
            <Row quote="random stuffs here adfadfdsaf dsfa sf " />
            <Row quote="random stuffs here adfadfdsaf dsfa sf " />
            <Row quote="random stuffs here adfadfdsaf dsfa sf " />
            <Row quote="random stuffs here adfadfdsaf dsfa sf " />
            <Row quote="random stuffs here adfadfdsaf dsfa sf " />
            <Row quote="random stuffs here adfadfdsaf dsfa sf " />
            <Row quote="random stuffs here adfadfdsaf dsfa sf " />
            <Row quote="random stuffs here adfadfdsaf dsfa sf " />
            <Row quote="random stuffs here adfadfdsaf dsfa sf " />
            <Row quote="random stuffs here adfadfdsaf dsfa sf " />
            <Row quote="random stuffs here adfadfdsaf dsfa sf " />
            <Row quote="random stuffs here adfadfdsaf dsfa sf " />
          </div>
        </section>
      </div>
      <div className={styles.backButtonContainer}>
        <a href="/" className={styles.backButton}>GO BACK</a>
      </div>
    </>
    
  );
};

// const Rows = () => {
  
// };

const Row = ({ quote, isDuckified }) => {
  return (
    <div className={styles.quote}>
      <p>{quote}</p>
    </div>
  );
};

export default QuotesPage;

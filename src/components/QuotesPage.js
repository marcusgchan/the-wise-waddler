import React from "react";
import styles from "./styles/QuotesPage.module.css";

const QuotesPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Saved Quotes</h1>
      <section className={styles.inputQuotesContainer}>
        <input type="text" className={styles.search} />
        <div className={styles.quotesContainer}>
          <Row quote="random stuffs here adfadfdsaf dsfa sf " />
        </div>
      </section>
    </div>
  );
};

const Row = ({ quote, isDuckified }) => {
  return (
    <div className={styles.quote}>
      <p>{quote}</p>
    </div>
  );
};

export default QuotesPage;

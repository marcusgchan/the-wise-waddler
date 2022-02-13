import React, { useEffect, useState } from "react";
import styles from "./styles/QuotesPage.module.css";
import NotePad from "../img/NotePad.svg";
import dummyQuotes from "../dummyQuotes.json";
import { useNavigate } from "react-router-dom";

const QuotesPage = () => {
  const quotes = dummyQuotes.quotes;
  const [filterSearch,setFilterSearch] = useState("");
  const [filteredQuotes, setFilteredQuotes] = useState(quotes);
  const navigate = useNavigate();
  useEffect(()=>{
    if (!filterSearch.replace(/\s/g, '').length) { //If there is only whitespace in filterSearch
      setFilteredQuotes(quotes);
    } else {
      setFilteredQuotes(quotes.filter((quote)=>quote.noQuackQuote.includes(filterSearch)));
    }
  },[filterSearch]);

  const handleFilterChange = (e) => {
    setFilterSearch(e.target.value);
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.headingContainer}>
          <h1 className={styles.heading}>Saved Quotes</h1>
          <img src={NotePad} alt="" className={styles.notePad} />
        </div>
        <section className={styles.inputQuotesContainer}>
          <input type="text" className={styles.search} value={filterSearch} 
          onChange={handleFilterChange}/>
          <div className={styles.quotesContainer}>
            <Rows filteredQuotes={filteredQuotes}/>
          </div>
        </section>
      </div>
      <div className={styles.backButtonContainer}>
        <button className={styles.backButton} onClick={()=>navigate("/")}>GO BACK</button>
      </div>
    </>
    
  );
};

const Rows = ({filteredQuotes}) => {
  // const quotes = localStorage.getItem("quotes");
  
  return(
    <div>
      {filteredQuotes.map((quote)=>
        <Row key={quote.id} quote={quote}/>)}
    </div>
  );
  
};

const Row = ({ quote, isDuckified }) => {
  return (
    <div className={styles.quote}>
      <p>{quote.noQuackQuote}</p>
    </div>
  );
};

export default QuotesPage;

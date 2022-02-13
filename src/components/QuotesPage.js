import React, { useEffect, useState } from "react";
import styles from "./styles/QuotesPage.module.css";
import NotePad from "../img/NotePad.svg";
import dummyQuotes from "../dummyQuotes.json";
import { useNavigate } from "react-router-dom";

const QuotesPage = () => {
  const quotes = dummyQuotes.quotes;
  const [filterSearch,setFilterSearch] = useState("");
  const [filteredQuotes, setFilteredQuotes] = useState(quotes);
  const [quackifyLevel, setQuackifyLevel] = useState(0);
  const navigate = useNavigate();
  useEffect(()=>{
    if (!filterSearch.replace(/\s/g, '').length) { //If there is only whitespace in filterSearch
      setFilteredQuotes(quotes);
    } else {
      switch (quackifyLevel) {
        case 0:
          setFilteredQuotes(quotes.filter((quote)=>quote.noQuackQuote.includes(filterSearch)));
          break;
        case 1:
          setFilteredQuotes(quotes.filter((quote)=>quote.midQuackQuote.includes(filterSearch)));
          break;
        default:
          setFilteredQuotes(quotes.filter((quote)=>quote.fullQuackQuote.includes(filterSearch)));
          break;
      }
    }
  },[filterSearch,quackifyLevel]);

  const handleFilterChange = (e) => {
    setFilterSearch(e.target.value);
  }

  const handleQuackifyClick = (type) => {
    if (type === "+") {
      setQuackifyLevel((prev)=>{
        if (prev === 2) {
          return 2;
        } else {
          return prev + 1;
        }
      });
    } else {
      setQuackifyLevel((prev)=>{
        if (prev === 0) {
          return 0;
        } else {
          return prev - 1;
        }
      });
    }
  }

  const quackDisplay = () => {
    switch (quackifyLevel) {
      case 0:
        return "Normal";
      case 1:
        return "Quacked";
      default:
        return "Full Quacked";
    }
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.headingContainer}>
          <h1 className={styles.heading}>Saved Quotes</h1>
          <img src={NotePad} alt="" className={styles.notePad} />
        </div>
        <section className={styles.inputQuotesContainer}>
          <div className={styles.inputsContainer}>
            <div className={styles.quackifyButtonContainer}>
              <button onClick={()=>handleQuackifyClick("-")}>-</button>
              <p className={styles.quackLevelDisplay}>Quack Level: {quackDisplay()}</p>
              <button onClick={()=>handleQuackifyClick("+")}>+</button>
            </div>
            <input type="text" className={styles.search} value={filterSearch} 
            onChange={handleFilterChange}/>
          </div>
          <div className={styles.quotesContainer}>
            <Rows filteredQuotes={filteredQuotes} quackifyLevel={quackifyLevel}/>
          </div>
        </section>
      </div>
      <div className={styles.backButtonContainer}>
        <button className={styles.backButton} onClick={()=>navigate("/")}>GO BACK</button>
      </div>
    </>
    
  );
};

const Rows = ({filteredQuotes, quackifyLevel}) => {
  // const quotes = localStorage.getItem("quotes");
  
  return(
    <div>
      {filteredQuotes.map((quote)=>
        <Row key={quote.id} quote={quote} quackifyLevel={quackifyLevel}/>)}
    </div>
  );
  
};

const Row = ({ quote, quackifyLevel }) => {
  // const [quackifyLevel,setQuackifyLevel] = useState(0);

  // const handleClick = () => {
  //   if (quackifyLevel == 2) {
  //     setQuackifyLevel(0);
  //   } else {
  //     setQuackifyLevel((prev) => prev + 1);
  //   }
  // }
  if (quackifyLevel === 0) {
    return (
      <div className={styles.quote}>
        <p>{quote.noQuackQuote}</p>
      </div>
    );
  } else if (quackifyLevel === 1) {
    return (
      <div className={styles.quote}>
        <p>{quote.midQuackQuote}</p>
      </div>
    );
  } else {
    return (
      <div className={styles.quote}>
        <p>{quote.fullQuackQuote}</p>
      </div>
    );
  }
  
};

export default QuotesPage;

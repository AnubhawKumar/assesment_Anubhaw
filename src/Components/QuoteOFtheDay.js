import React, { useEffect, useState } from "react";

import "./utils/quoteOFTheDay.css";

const Quoteoftheday = () => {
  const [quoteByName, setQuoteByName] = useState([]);
  const [authorName, setAuthorName] = useState("ivo");

  const shuffleData = (data) => {
    for (let i = data.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = data[i];
      data[i] = data[j];
      data[j] = temp;
    }
  };
  useEffect(() => {
    fetch(`https://quote-api-app.herokuapp.com/quote`)
      .then((res) => res.json())
      .then((data) => {
        shuffleData(data);
        // console.log(data);
        setAuthorName(data[0].author);
      });
  }, []);
  
  useEffect(() => {
    fetch(
      `https://quote-api-app.herokuapp.com/quote/search?author=${authorName}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setQuoteByName(data);
      });
  }, [authorName]);

  return (
    <div className="quote_of_theday_container">
    <h1 className="quote_of_the_day_head">Quote of the Day</h1>
        <div className="Quote_of_the_Day">
          <p>
            {quoteByName[0]?.quote} <span>~by {authorName} </span>
          </p>
        </div>
    </div>
  );
};

export default Quoteoftheday;

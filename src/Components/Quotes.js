import React, { useEffect, useState } from "react";
import "./utils/quote.css";
const Quotes = () => {
  const [quotes, setQuotes] = useState([]);

  const [inputField, setInputField] = useState("");

  useEffect(() => {
    fetch("https://quote-api-app.herokuapp.com/quote")
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data);
      });
  }, []);

  useEffect(() => {
    fetch("https://quote-api-app.herokuapp.com/quote")
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data);
      });
  }, [inputField]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = [...quotes]?.filter((data) => data.author.toLowerCase().includes(inputField.toLowerCase()));
    setQuotes(newData);
  }
  return (
    <div className="quote_container">
      <div className="form_container">
        <p>Search By Author</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="input_box"
            value={inputField}
            onChange={(e) => setInputField(e.target.value)}
          />
          <button className="btn_search" type="submit">Search</button>
        </form>
      </div>
      <h2 className="quote_head">Quotes</h2>
      {quotes.map((item) => (
        <div className="all_quotes" key={item._id}>
          <div className="quote_and_likes">
            <p>{item.quote}</p>
            <p className="likes">{item.likes}</p>
          </div>
          <p className="author_quotes">{item.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Quotes;

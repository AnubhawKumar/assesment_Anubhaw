import React, { useEffect, useState } from "react";

import './utils/author.css'

const Author = () => {
  const [author, setAuthor] = useState([]);

  useEffect(() => {
    fetch("https://quote-api-app.herokuapp.com/author")
      .then((res) => res.json())
      .then((authorName) => setAuthor(authorName));
  }, []);
  
  return (
    <div className="author_container">
        <h2>Authors</h2>
        <ul className="list_author">
           {
               author.map((auth,index) => (
                   <li key={index}>{auth}</li>
               ))
           }
        </ul>
    </div>
  );
};

export default Author;

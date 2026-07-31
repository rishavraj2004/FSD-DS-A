import React from "react";

const Book = ({ foodName, foodImg, price }) => {
  return (
    <div>
      <div className="book-container">
        <div className="small-container">
          <div className="book-head">
            <h2>{foodName}</h2>
          </div>
          <div className="about-book">
            <img className="img" src={foodImg} />
            <h3>Price: {price}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;

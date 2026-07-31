import React from "react";

const Card = ({ userName, img }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        fontFamily: "system-ui",
        marginBottom: "25px",
      }}
    >
      <div
        style={{
          border: "2px solid Green",
          height: "300px",
          width: "300px",
          borderRadius: "12px",
          boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.3)",
          backgroundColor: "#caf0f8",
        }}
      >
        <h2 style={{ display: "flex", justifyContent: "center" }}>
          ABES STUDENT CARD
        </h2>
        <div>
          <img
            src={img}
            alt="A descriptive description of the photo"
            style={{
              height: "75px",
              width: "75px",
              marginLeft: "25px",
            }}
          />
        </div>
        <div>
          <ul style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
            <li>Btech(DSA-A)</li>
            <li>Name:{userName}</li>
            <li>Year:3rd</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;

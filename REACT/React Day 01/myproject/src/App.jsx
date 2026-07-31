import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: "25px",
      }}
    >
      {/* <h1>Hello,World!</h1> */}
      <Card
        userName="Rishav Raj"
        img="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FydG9vbnxlbnwwfHwwfHx8MA%3D%3D"
      />
      <Card
        userName="Tanmay"
        img="https://images.unsplash.com/photo-1606663889134-b1dedb5ed8b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FydG9vbnxlbnwwfHwwfHx8MA%3D%3D"
      />
      <Card
        userName="Ritesh"
        img="https://images.unsplash.com/photo-1529335764857-3f1164d1cb24?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhcnRvb258ZW58MHx8MHx8fDA%3D"
      />
    </div>
  );
};

export default App;

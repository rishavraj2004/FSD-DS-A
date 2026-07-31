import React from "react";
import NavBar from "./components/NavBar";
import Book from "./components/Book";
const App = () => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Book
          foodName="Burger"
          price="5$"
          foodImg="https://png.pngtree.com/png-vector/20240829/ourmid/pngtree-delicious-and-testy-cheese-burger-png-image_13659847.png"
        />
        <Book
          foodName="Sandwich"
          foodImg="https://img.magnific.com/premium-psd/mumbaistyle-veg-sandwich-transparent-background_1255831-1031.jpg?semt=ais_hybrid&w=740&q=80"
          price="8$"
        />
        <Book
          foodName="Biryani"
          foodImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiQq231csBaXFsLuDcKYWbOQxN2XuCfgVDHgh7f9hnqHgVgbEG3qioWWE&s=10"
          price="25$"
        />
        <Book
          foodName="Ice - Cream"
          foodImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfC74a2gj5XlTYLPIfhUjhABm-odf-bbW1CVT-74VdmTAA4YGou7yJoCM&s=10"
          price="15$"
        />
      </div>
    </div>
  );
};

export default App;

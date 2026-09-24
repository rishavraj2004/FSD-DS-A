import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <h1>This is my homepage</h1>
      <p>ABES is the best college established in 2000. </p>
    </div>
  );
}

function About() {
  return (
    <div className="container">
      <h1>This is about us page</h1>;
    </div>
  );
}

function Contact() {
  return (
    <div className="container">
      <h1>This is contact us form</h1>
    </div>
  );
}
function Privacy() {
  return (
    <div className="container">
      <h1>This is Privacy form</h1>
    </div>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <nav className="nav">
        <Link className="nav-link" to="/">
          HOME
        </Link>
        <Link className="nav-link" to="/about">
          About US
        </Link>
        <Link className="nav-link" to="/contact">
          Contact Us
        </Link>
        <Link className="nav-link" to="/privacy">
          Privacy
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// function Home() {
//   return <h1>This is my homepage</h1>;
// }

// function About() {6
//   return <h1>This is about us page</h1>;
// }

// const App = () => {
//   return (
//     <BrowserRouter>
//       <nav>
//         <Link to="/">HOME</Link>
//         <Link to="/about">About US</Link>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;

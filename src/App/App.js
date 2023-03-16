import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import ToTopButton from "./ToTopButtom";
import "./App.css";
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@500&family=Roboto:ital,wght@0,100;0,900;1,100;1,500;1,900&display=swap"
></link>;

function App() {
  return (
    <>
      <Header />
      <ToTopButton variant="primary" className="totopbutton" />
      <Footer />
    </>
  );
}

export default App;

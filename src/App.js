import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { BASE_URL, API_KEY } from "./constants/index.js";
import Header from "./components/header.js";
import Photo from "./components/Photo.js";
import Footer from "./components/footer.js";

function App() {
  const [info, setInfo]=useState([]);
  useEffect(() => {
  axios
  .get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`)
  .then(res => {
    setInfo(res.data)
  })
  .catch(err => {
    console.log(err);
  })
}, []);

  return (
    <div className="App">
      <Header headerData={info} />
      <Photo photoData={info} />
      <Footer footerData={info} />
    </div>
  );
}

export default App;

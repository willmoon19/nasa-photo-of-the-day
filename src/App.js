import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { BASE_URL, API_KEY } from "./constants/index.js"

function App() {
  const [newData, setNewData] = useState(null)
  const [img, setImg] = useState(null);
  useEffect(() => {
    axios
    .get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`)
    .then((res) => {
      setNewData(res.data)
      setImg(res.data.hdurl)
    })
    .catch(err => console.log(err))
  }, [])

  const Image = (props) => 
   (
    <>
    <img src={props.img} alt=""></img>
    </>
  )
  
  return (
    <div className="App">
      <Image img={img} />
      <ImgDate key={newData.key} date={newData} />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;

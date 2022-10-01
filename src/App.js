import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import PageNotFond from "./components/PageNotFond";
import Reviewscard from "./components/Reviewscard";

function App() {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const [timeEnd, setTimeEnd] = useState();
  const [NewreviewCard, setReviewCard] = useState(false);
  const [selected, setOnSelected] = useState();
  const Apikey = `ecb4c4e8`;

  // fetching Api
  const fetchData = (searchStr = "iron") => {
    let url = ` https://www.omdbapi.com/?s=${
      searchStr == "" ? "iron" : searchStr
    }&apikey=${Apikey}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItems(data.Search);
      })
      .catch((error) => console.log(error));
    setInputData("");
  };

  useEffect(() => {
    fetchData();
  }, []);


  //Getting input from field
  const inputHandle = (e) => {
    clearTimeout(timeEnd); // Debouncing here
    setInputData(e.target.value);
    var timeout = setTimeout(() => fetchData(e.target.value), 500);
    setTimeEnd(timeout);
    //console.log(e.target.value);
  };
  const ReviewCard = () => {
    console.log('hii');
    setReviewCard(!NewreviewCard);
  };
  return (
    <>
      <Header inputHandle={inputHandle} inputData={inputData} />
      <Routes>
        <Route
          exact
          path="./home"
          index
          element={<Header inputData={inputData} />}
        />
        <Route exact path="*" element={<PageNotFond />} />
      </Routes>

      {NewreviewCard && <Reviewscard selected={selected} />}
      {items.map((ele, index) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("main_box");
        return (newDiv.innerHTML = (
          <Main
            size={ele}
            key={index}
            reviewCard={ReviewCard}
            setOnSelected={setOnSelected}
          />
        ));
      })}
    </>
  );
}

export default App;

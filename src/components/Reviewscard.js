import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {FaTimes} from 'react-icons/fa'

const Apikey = `ecb4c4e8`;

function Reviewscard({ selected }) {
  const [myData, setMydata] = useState({});
  useEffect(() => {
    axios.get(`https://www.omdbapi.com/?i=${selected}&apikey=${Apikey}`)
      .then((res) => {
        setMydata(res.data)
        console.log(res.data)
      })
      .catch((err) => console.log(err));
  }, []);


  return (
    <>
      
      <div className="movie-card">
     
        <div className="container">
        {/* <FaTimes className='cancelBtn' /> */}
          <img src={myData.Poster} alt="cover" className="cover" />
          <div className="hero">
            <div className="details">
              <div className="title1">Name:   <span> {myData.Title}</span></div>
              <div className="title1">Runtime:   <span> {myData.Runtime}</span></div>
              <div className="title1">Rating: <span>{myData.imdbRating}</span></div>
              <div className="title1">Language: <span>{myData.Language}</span></div>
              <div className="title1">Writer: <span>{myData.Writer}</span></div>
              <div className="title1">Released: <span>{myData.Released}</span></div>
              <div className="title2">Actors: {myData.Actors}</div>
              <span className="likes">109 likes❤️</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Reviewscard
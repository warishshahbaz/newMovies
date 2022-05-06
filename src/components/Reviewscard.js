import axios from 'axios'
import React, { useEffect, useState } from 'react'
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

          <div class="description">

            <div class="column2">

              <p>{myData.Plot} <a href="#">read more</a></p>

              <div class="avatars">
                <a href="#" data-tooltip="Person 1" data-placement="top">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_avatar1.png" alt="avatar1" />
                </a>

                <a href="#" data-tooltip="Person 2" data-placement="top">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_avatar2.png" alt="avatar2" />
                </a>


                <a href="#" data-tooltip="Person 3" data-placement="top">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_avatar3.png" alt="avatar3" />
                </a>

              </div>



            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default Reviewscard
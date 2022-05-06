import React from 'react'

function Main({size,reviewCard,setOnSelected}) {
	
	return (
		<>
			<div className="container_card" onClick={()=>setOnSelected(size.imdbID)}>
				<div className="cards" onClick={reviewCard}>
					<img src={size.Poster} alt="logo" />
					<div className="movies_heading">
						<h5>{size.Title}</h5>
					</div>
					<div className="type">
						<p className='first_p'>year:{size.Year}</p>
						<p className='second_p'>type movies</p>
					</div>
				</div>

			</div>

		</>
	)
}

export default Main
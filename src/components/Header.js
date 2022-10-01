import React from 'react'
import { Link } from 'react-router-dom'
import {swal} from 'sweetalert'

function Header({inputHandle,inputData}) {

    const upComingMovies = ()=>{
        alert('Wait for few days...')
        
    }
    return (
        <>
            <header>
                <nav>
                    <div className="log">
                        <img src="https://static8.depositphotos.com/1378583/987/v/600/depositphotos_9878369-stock-illustration-camera-and-film-logo.jpg" alt="logo" /></div>
                    <div className="field"><input type="text" placeholder='search..' onChange={inputHandle} value={inputData} /></div>
                </nav>
                <div className="upcoming">
                    <h3 className='movies_name'>Captain America: The First Avenger (1942)</h3>
                    <button onClick={upComingMovies} >Up Coming ...</button>
                </div>
            </header>
        </>
    )
}

export default Header
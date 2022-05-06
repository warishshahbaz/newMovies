import React from 'react'
import { Link } from 'react-router-dom'
import {swal} from 'sweetalert'

function Header({inputHandle,inputData}) {

    const upComingMovies = ()=>{
        alert('Wait for few days...')
        // swal("Hello world!")
    }
    return (
        <>
            <header>
            {/* <img src="https://wallpaperaccess.com/full/329583.jpg" alt="" /> */}
                <nav>
                    <div className="log">
                        <ul><li>
                            <Link to="/main">Play List</Link>

                        </li>
                        <li>
                    <Link to="/home">Home</Link>
                    
                    </li>
                        </ul>
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
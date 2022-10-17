import React from "react";
import { Link } from "react-router-dom";
import { swal } from "sweetalert";
import { useAuth0 } from "@auth0/auth0-react";

function Header({ inputHandle, inputData }) {
  const { loginWithRedirect,isAuthenticated,logout,user } = useAuth0();
  const upComingMovies = () => {
    alert("Wait for few days...");
  };

  
  return (
    <>
      <header>
        <nav>
          <div className="log">
            <img
              src="https://static8.depositphotos.com/1378583/987/v/600/depositphotos_9878369-stock-illustration-camera-and-film-logo.jpg"
              alt="logo"
            />
             
          </div>
        
        
          <div className="field">
            <input
              type="text"
              placeholder="search.."
              onChange={inputHandle}
              value={inputData}
            />
          </div>
          <div className="login_btn" >
          {
            isAuthenticated ? 
            <button onClick={() => logout({ returnTo: window.location.origin })}> Log Out</button> :
             <button onClick={() => loginWithRedirect()}>Log In</button>}
             <div>
              {
                isAuthenticated && <p style={{color:"grey"}} >{(user.name.slice(0,-10))}...</p>
              }
             </div>
          </div>
        </nav>
        <div className="upcoming">
          <h3 className="movies_name">
            Captain America: The First Avenger (1942)
          </h3>
          <button onClick={upComingMovies}>Up Coming ...</button>
        </div>
      </header>
    </>
  );
}

export default Header;

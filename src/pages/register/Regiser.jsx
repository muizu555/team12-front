import axios from "axios";
import React, { useRef } from "react";
import "./Register.css";

export default function Register(){
    const username = useRef();
    const playlistId = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const user = {
                username: username.current.value,
                playlistId: playlistId.current.value
            };
            //register API を叩く
            await axios.post("/api/v1/auth/register", user);
        } catch (err) {
            console.log(err);
            
        }
    }


    return  (
    <div className="register">
        <div className="registerWrapper">
            <div className="registerLeft">
                <h3 className="registerLogo">YouTube WatchTime Tracker</h3>
                <span className="registerDesc">Preventing Excessive Viewing</span>
            </div>
            <div className="registerRight">
                <form className="registerBox" onSubmit={(e) => handleSubmit(e)}>
                    <p className="registerMsg">Register User Info</p>
                    <input 
                      type="text" 
                      className="registerInput" 
                      placeholder="username (3~25)" 
                      required
                      ref={username}
                    />
                    <input 
                      type="text" 
                      className="registerInput" 
                      placeholder="playlistId" 
                      required
                      ref={playlistId}
                    />
                    <button className="registerButton" type="submit">Create</button>
                </form>
            </div>
        </div>
    </div>
    );
}
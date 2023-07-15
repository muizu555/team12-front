import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

export default function Register(){
    const username = useRef();
    const playlistId = useRef();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const user = {
                username: username.current.value,
                playlistId: playlistId.current.value
            };
            //register API を叩く
            const res = await axios.post("http://localhost:8000/api/v1/auth/register", user, {
                withCredentials: true
            });
            console.log("headers", res.headers)
            navigate("/login");
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
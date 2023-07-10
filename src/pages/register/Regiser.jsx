import React from "react";
import "./Register.css";

export default function Register(){
    return  (
    <div className="register">
        <div className="registerWrapper">
            <div className="registerLeft">
                <h3 className="registerLogo">YouTube WatchTime Tracker</h3>
                <span className="registerDesc">Preventing Excessive Viewing</span>
            </div>
            <div className="registerRight">
                <div className="registerBox">
                    <p className="registerMsg">ユーザー登録はこちら</p>
                </div>
            </div>
        </div>
    </div>
    );
}
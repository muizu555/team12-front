import axios from "axios";
import React, { useState } from 'react'
import { useGoogleLogin } from "@react-oauth/google";
import { Navigate } from "react-router-dom";


export default function GoogleLogin() {
    const [loggedInSuccess, setLoggedInSuccess] = useState(false)

    const googleLogin = useGoogleLogin({
        flow: 'auth-code',
        ux_mode: 'popup',
        // redirect_uri: 'https://team12-front.vercel.app/login',
        scope: "https://www.googleapis.com/auth/youtube https://www.gdata.youtube.com https://gdata.youtube.com/ https://gdata.youtube.com http://gdata.youtube.com http://gdata.youtube.com/ https://gdata.youtube.com/feeds/ http://gdata.youtube.com/feeds/api/videos/ http://gdata.youtube.com/feeds/api/users/default/playlists http://gdata.youtube.com/youtube https://gdata.youtube.com/feeds/api/users/default/favorites/ https://gdata.youtube.com/feeds/api https://gdata.youtube.com/captions https://gdata.youtube.com/feed https://www.googleapis.com/auth/youtubepartner https://www.googleapis.com/auth/youtube.readonly https://www.googleapis.com/auth/youtube.force-ssl",
        onSuccess: async (codeResponse) => {
            console.log(codeResponse);
            await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/v1/auth/googleauth`,{code: codeResponse.code}, {
                withCredentials: true,
            });
            setLoggedInSuccess(true)
            // console.log(tokens);
        },
        onError: errorResponse => console.log(errorResponse),
    });

    if (loggedInSuccess) {
        return <Navigate to="/" />
    }

    return (
        <button onClick={googleLogin}>
            Google Login
        </button>
    )
}


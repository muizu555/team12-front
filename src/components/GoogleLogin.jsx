import axios from "axios";
import React from 'react'
import { useGoogleLogin } from "@react-oauth/google";


export default function GoogleLogin() {
    const googleLogin = useGoogleLogin({
        flow: 'auth-code',
        onSuccess: async (codeResponse) => {
            console.log(codeResponse);
            await axios.post('http://localhost:8000/api/v1/auth/googleauth',{code: codeResponse.code}, {
                withCredentials: true,
            });
            // console.log(tokens);
        },
        onError: errorResponse => console.log(errorResponse),
    });
  return (
    <button onClick={googleLogin}>
        Google Login
    </button>
  )
}


import React from 'react'
import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleLogin from "../../components/GoogleLogin";





export default function Login() {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_YOUR_CLIENT_ID}>
        <GoogleLogin />
    </GoogleOAuthProvider>
  )
}

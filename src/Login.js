import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import './Login.css'
import {auth, provider} from "./Firebase"
import { useStateValue } from './StateProvider'
import {actionTypes} from "./reducer"


function Login() {
    const [state, dispatch] = useStateValue();//pull information from data layer

    const signIn =() => {
        //sign in, passing provider and handling error
        auth.signInWithPopup(provider)
        .then(result => {

            //pushing user into the data layer
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
            
        }).catch((error) => alert(error.message));
    }
    return (
        <div className="login">
            <div className="login_logo">
                <img
                src="https://www.informaticsinc.com/application/files/5615/1456/2706/5PopularSocialMediaSitesandthecompaniesusingthem-900.jpg"
                alt="" /> 
            </div>
            <Button 
            type= "submit"
            onClick={signIn}
            >Sign In</Button>
        </div>
    )
}

export default Login

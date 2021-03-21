import React from 'react'
import './Login.css'
import {Button} from '@material-ui/core'
import {auth,provider} from "./firebase"
import { useStateValue } from './StateProvider'
import  {actionTypes} from "./reducer"
function Login() {
    const [state,dispatch]=useStateValue();   
    const signIn=()=>{

        auth.signInWithPopup(provider)
         .then((result)=>{
           dispatch({
               type:actionTypes.SET_USER,
               user:result.user,

           })


         })
         .catch((error)=>alert(error.message))
        }
        
    
    return (
        <div className="login">
            <div className="login-logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png"
                    alt=""/>
                 <img src="https://cdn.worldvectorlogo.com/logos/facebook-5.svg"  alt=""/>

            </div>
            <Button type ="submit" onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login

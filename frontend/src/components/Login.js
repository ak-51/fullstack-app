import React, { useState } from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

const Login = () => {
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [Text, setText] = useState('')

    const sendLgInfo = (e) => {
        e.preventDefault()
        axios.post('/api/login', {
            email: Email,
            password: Password
        })
        .then(response => {
            if(response.data.output === "match"){
                history.push('/profile')
            }
            else{
                setText("Incorrect Email or Password")
            }
        })
    }

    return(
        <div className="loginPage">
            <form>
                <div>{Text}</div>
                <label>Email Address</label>
                <input type="email" value={Email} onChange={(e) => setEmail(e.target.value)} required />
                <br />
                <label>Password</label>
                <input type="password" value={Password} onChange={e => setPassword(e.target.value)} required />
                <br />
                <button className="Button" onClick={sendLgInfo}>Submit</button>
            </form>
        </div>
    )
}

export default Login
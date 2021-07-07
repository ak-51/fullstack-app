import React, { useState } from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

const Register = () => {
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [ErrorMsg, setErrorMsg] = useState('')
    const [ErrorBg, setErrorBg] = useState('')

    let history = useHistory()

    const sendInfo = (e) => {
        e.preventDefault()
        axios.post('/api/register', {
            name: Name,
            email: Email,
            password: Password
        })
        .then(response => {
            if(response.data.note === "saved"){
                history.push('/login')
            }
            else{
                setErrorMsg("Email is already in use")
                setErrorBg("#22303C")
            }
        })
    }

    return(
        <div className="registerPage">
            <form>
                <div style={{color:"red", paddingBottom:"10px"}}>
                    <span style={{backgroundColor:ErrorBg, padding: "5px"}}>{ErrorMsg}</span>
                </div>
                <label>Name </label>
                <input type="text" onChange={(e) => setName(e.target.value)} required />
                <br />
                <label>Email Address </label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} required />
                <br />
                <label>Password </label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} required />
                <br />
                <button className="Button" onClick={sendInfo}>Submit</button>
            </form>
        </div>
    )
}

export default Register
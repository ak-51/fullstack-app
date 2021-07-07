import React, { useState } from 'react'
import axios from 'axios'

const Register = () => {
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')

    const sendInfo = (e) => {
        e.preventDefault()
        axios.post('/api/register', {
            name: Name,
            email: Email,
            password: Password
        })
        .then((response) => console.log(response.data.note))
    }

    return(
        <div className="registerPage">
            <form>
                <label>Name </label>
                <input type="text" onChange={(e) => setName(e.target.value)} required />
                <br />
                <label>Email Address </label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} required />
                <br />
                <label>Password </label>
                <input type="text" onChange={(e) => setPassword(e.target.value)} required />
                <br />
                <button className="Button" onClick={sendInfo}>Submit</button>
            </form>
        </div>
    )
}

export default Register
import React, { useState } from 'react'

const Register = () => {
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')

    return(
        <div>
            <form>
                <label>Name</label>
                <input type="text" onChange={(e) => setName(e.target.value)} required />
                <br />
                <label>Email Address</label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} required />
                <br />
                <label>Password</label>
                <input type="text" onChange={(e) => setPassword(e.target.value)} required />
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Register
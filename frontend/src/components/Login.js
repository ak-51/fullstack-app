import React, { useState } from 'react'

const Login = () => {
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')

    return(
        <div>
            <form>
                <label>Email Address</label>
                <input type="text" value={Email} onChange={(e) => setEmail(e.target.value)} required />
                <br />
                <label>Password</label>
                <input type="text" value={Password} onChange={e => setPassword(e.target.value)} required />
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login
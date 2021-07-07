import React from 'react'
import { useHistory } from 'react-router'

const Home = () =>{
    let history = useHistory()
    return(
        <div>
            <button>Login</button>
            <br />
            <button onClick={() => {history.push('/register')}}>Register</button>
        </div>
    )
}

export default Home
import React from 'react'
import { useHistory } from 'react-router'

const Home = () =>{
    let history = useHistory()
    return(
        <div className="homePage">
            <button className="Button" onClick={() => history.push('/login')}>Login</button>
            <br />
            <button className="Button" onClick={() => history.push('/register')}>Register</button>
        </div>
    )
}

export default Home
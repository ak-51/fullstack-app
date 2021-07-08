import React from 'react'
import { useHistory } from 'react-router'

const Home = () =>{
    let history = useHistory()
    return(
        <div className="homePage">
            <div className="homeContainer">
                <button className="Button" onClick={() => history.push('/login')}>Login</button>
                <br />
                <button className="Button" onClick={() => history.push('/register')}>Register</button>
            </div>
        </div>
    )
}

export default Home
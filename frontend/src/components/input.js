import React, { useState } from 'react'
import axios from 'axios'

const Input = () => {
    const [Val, setVal] = useState('')
    const [Output, setOutput] = useState('')

    const getData = () => {
        axios.post('/api/notes', {
            ttl: Val
        })
        .then((response) => {
            console.log(response.data[0].content)
            setOutput(response.data[0].content + " " + response.data[0].favnum)
        })
    }

    return(
        <div>
            <input type="text" value={Val} onChange={(e) => setVal(e.target.value)}/>
            <button type="submit" onClick={getData}>Submit</button>
            <div>{Output}</div>
        </div>
    )
}

export default Input
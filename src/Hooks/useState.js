import React, { useState } from 'react'
import "../Hooks/hooks.css"

function UseState(){
    const [count,setCount] = useState(() => { return 4 })
    const [th,seth] = useState(() => { return 'blue' })
    const decrement =() =>{
        seth('red')

        setCount(prev => prev-1)
        setCount(prev => prev-1)
        setCount(prev => prev-1)

    }
    const increment =() =>{
        setCount(count+1)
        seth('purple')
    }
    return(
        <div className="usestate">
    <button onClick={decrement}  className="insert">-</button>
    <h1>{count} {th}</h1>
    <button onClick={increment} className="insert">+</button>
    </div>
    )
}

export default UseState

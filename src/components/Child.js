import React from 'react'


function Child(props){
    return(
        <div>
            <button onClick={props.greetHandler}>this is childs</button>
            <button onClick= {() => props.greetHandler('thisi is childd')}>this is child 2</button>
        </div>
    )
}
export default  Child
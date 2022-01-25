import React,{Component} from 'react'


function Child(props){
    return(
        <div>
            <button onClick={props.greetHandler}>this is child</button>
        </div>
    )
}
export default  Child
import React from 'react'

function Person({member,key}) {
    return (
        <div>
         {key} <h2>Hello my Name is {member.name} and age is {member.age} and skill is {member.skill}</h2> 

        </div>
    )
}

export default Person
       

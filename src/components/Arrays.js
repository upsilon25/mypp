import React from 'react'

function Array(){

    const array1=[
            {
                id:1,
                name:"vijay ratan",
                age:23,
                skill:"React"
            },
            {
                id:2,
                name:"suresh",
                age:25,
                skill:"python"
                
            },
            {   id:3,
                name:"uv",
                age:25,
                skill:"c++"
            },
            {   id:3,
                name:"dhoni",
                age:29,
                skill:"c"
            }
      ]
    return(
    <div>
     {
         array1.map(person => <h2>Hello my Name is {person.name} and age is {person.age} and skill is {person.skill}</h2> )
     }
    
    </div>
    )
 }

 export default Array
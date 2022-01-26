import React from 'react'
import Person from './Person'
function NameList(){
    const persons=[
        {
            id:2,
            name:"Orange",
            age:23,
            skill:"React"
        },
        {
            id:2,
            name:"Red",
            age:25,
            skill:"python"
            
        },
        {   id:23,
            name:"Purple",
            age:25,
            skill:"c++"
        },
        {   id:3,
            name:"black",
            age:29,
            skill:"c"
        }
    ]

    const personList = persons.map(person =><Person key={persons.id}  member={person} />)
return <div>{personList}</div>
}


export default NameList
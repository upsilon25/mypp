import React,{Component} from 'react'
import Child from './Child'


class Parent extends Component{
    constructor(props){
        super(props)
        this.state={
            message:"The Parent Component"
        }
    this.greetP=this.greetP.bind(this)
    }
    greetP(childna){
        alert(`Hello this is ${childna}`)
        this.setState({
            message:"changed From CHild"
        })
    }
    render(){
        return(
            <div>
             <h4> Message from Parent   <h1>{this.state.message}</h1></h4>
                <Child greetHandler={this.greetP}/>
            </div>
        )
    }
}
export default Parent
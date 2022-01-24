import React,{Component} from 'react'

class MetState extends Component{
    constructor(){
        super()
        this.state ={
            message:"hello vijay"
        }
    }
    changeMessage(){
        this.setState({
            message:"thankyou very much"
        })

    }
    changeMessageAgain(){
        this.setState({
            message:"hello sachin"
        })
    }
    render(){
        return(
         <div>
             <h1>{this.state.message}</h1>
             <button onClick={() =>this.changeMessage()}>submit</button>
             <button onClick={() =>this.changeMessageAgain()}>submit</button>
         </div>
         )
}
}

export default MetState
import React,{Component} from 'react'

class Counter extends Component{
    
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }

    countIncre(){
        this.setState({
                count:this.state.count+10        
        })
    }
    countDecre(){
        this.setState({
                count:this.state.count-1      
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={()=> this.countIncre()} >increment</button>
                <button onClick={()=> this.countDecre()} >Decrement</button>
               
            </div>
        )
    }
}

export default Counter
import React,{Component} from 'react'


class MetSetState extends Component{
    constructor(){
        super()
        this.state={
            message:"good Morning"
        }
    }

    eventHandler1(){
        this.setState({
            message:"AfterNoon"
        })
    }
    eventHandler2(){
        this.setState({
            message:"Evening"
        })
    }

    render(){
        return(
            <div>
                <h1>=metState - {this.state.message}</h1>
                <button onClick={this.eventHandler1.bind(this)}>change</button>                
                <button onClick={()=>this.eventHandler2()}>change</button>
            </div>        
            )
    }
}

export default MetSetState
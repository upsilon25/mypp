import React,{Component} from 'react'

class From extends Component{
    constructor(props){
        super(props)
        this.state={
         Name:''
        }
    }

    handleName = event => {
        this.setState({
            Name:this.state.Name
        })
    }
    render(){
        return(
            <form action="">
            <div>
            <h1>Form Element</h1>
            <h2>Name : <input  type="text" value={this.state.name} onChange={this.handleName}/>  </h2>
                
               
            </div>
            </form>
        )
    }
}

export default From


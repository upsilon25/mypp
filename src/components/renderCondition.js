import React,{Component} from 'react'

class Render extends Component{
    constructor(){
        super()
        this.state={
           message:"Guest",
           islogin:false
        }
        
    }
    changePro(){
        this.setState({
            message:"Vijay",
            islogin:true
        })
    }
    render(){
        if(!this.state.islogin){
        return(
            <div>
              <h1>Good morning {this.state.message}</h1>
              <button onClick={this.changePro.bind(this)}>Change login</button>
            </div>
        )}
        else{
            return(
                <div>
                    <h1>Good morning {this.state.message}</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste est voluptas ipsam natus vel sunt eaque, distinctio magni dignissimos ipsum?</p>
                </div>
            )
        }
        
    }
}
export default Render
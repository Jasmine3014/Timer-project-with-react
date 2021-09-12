import { Component } from "react";
import './index.css'
class App extends Component {

     state = {
         count:0
     }
     incrementCount=() =>{
       this.setState({count: this.state.count + 1})
     }
     decrementCount=() =>{
         if(this.state.count >0){
         this.setState({count: this.state.count - 1})
         }
      }
  render(){


  return (
    <div className="home">
        <div className="container">
            <h1>Timer Project with react</h1>
           <div className="btn">
                <p className="Text"onClick={this.decrementCount}>-</p>
                <input type="submit" value={this.state.count}></input>
                <p className="Text"onClick={this.incrementCount}>+</p>
           </div>
        </div>
    </div>
  );
}
}

export default App;

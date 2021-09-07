import { Component } from "react";
class App extends Component {

     state = {
         count:0
     }
     incrementCount=() =>{
       this.setState({count: this.state.count + 1})
     }
     decrementCount=() =>{
        this.setState({count: this.state.count - 1})

      }
  render(){


  return (
    <div className="App">
        <div className="container">
            <h1>Simple Project</h1>
            <button onClick={this.decrementCount}> - </button>
            <p className="Text">{this.state.count}</p>
            <button onClick={this.incrementCount}> + </button>
        </div>
    </div>
  );
}
}

export default App;

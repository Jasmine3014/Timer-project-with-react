import { Component } from "react";
import './index.css'
class App extends Component {
    // intervalId=null
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
      startTimer = () => {
        if (this.state.count > 0 && !this.intervalId) {
        this.intervalId = setInterval(() => {
          this.setState({ count: this.state.count -1}, () => {
            if (this.state.count===0){
              alert('Timer Finished');
              clearInterval(this.intervalId);
              this.intervalId = null;
        
        }
        
        });
        
        }, 1000);
    }  
}  

        stopTimer = () => {

            if (this.intervalid) {
            
            clearInterval(this.intervalId); this.intervalId = null;
            
            }
        }
        resetTimer = () => {

            this.setState({ count: 0 });
             clearInterval(this.intervalid);
            this.intervalid = null;
        };
            
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
           <div className="hero-ctn">
               <button className="ctn" onClick={this.startTimer}>Start</button>
               <button className="ctn" onClick={this.resetTimer}>Reset</button>
               <button className="ctn" onClick={this.stopTimer}>Stop</button>


           </div>
        </div>
    </div>
  );
}
}

export default App;

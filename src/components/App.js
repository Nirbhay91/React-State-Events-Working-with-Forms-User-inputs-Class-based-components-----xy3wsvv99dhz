import React, {Component} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
	    this.state = { pHidden : false };
      //this.updateState = this.updateState.bind(this) 
      
	};
  updateState() { 
      
    this.setState({pHidden: !(this.state.pHidden)}) 
  } 

    render() {
    	return(
    		<div id="main">
			<button
        id="click"
        onClick={
          this.updateState.bind(this)
        }
      >
        Show paragraph
      </button>
      {this.state.pHidden ? (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
      ) : null }
    		</div>
    	);
    }
}


export default App

import React, { Component } from 'react';
import './App.css';
import Validation from "./components/Validation";
import Char from "./components/Char";

class App extends Component {
state = {
  inputLength: 0,
  inputText: ''
};


inputChangedHandler = (e) => {
  this.setState({
    inputLength: e.target.value.length,
    inputText: e.target.value
  });
};


removeCharHandler = (event, i) => {
  const inputArr = this.state.inputText.split('');
  const index = inputArr.findIndex(i => {
    return Char.char === inputArr[i];
  });

  inputArr.splice(index, 1);

  this.setState({
    inputText: inputArr.join('')
  });
};


  render() {

    let inputArr = this.state.inputText.split('');


    return (
      <div className="App">
       <input type="text" name="input"
       onChange={this.inputChangedHandler}/>
       <p>Length of text: {this.state.inputLength}</p>
       <Validation inputLength={this.state.inputLength} />
       {inputArr.map((char, i) => {
         return <Char key={i} 
         char={inputArr[i]} 
         click={(event) => this.removeCharHandler(event, i)}/>
       })}
      </div>
    );
  }
}

export default App;

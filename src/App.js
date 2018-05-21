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


removeCharHandler = (event, char) => {
  let inputArr = '';
  inputArr += this.state.inputText;
  inputArr = inputArr.split('');
  console.log(inputArr);
  inputArr = inputArr.filter(charInArr => {
    return charInArr !== char; 
  });

  inputArr = inputArr.join('');
  document.getElementById("input").value = inputArr;

  this.setState({
    inputText: inputArr
  });
};


  render() {

    let inputArr = '';
    inputArr += this.state.inputText;
    inputArr = inputArr.split('');


    return (
      <div className="App">
       <input type="text" id="input"
       onChange={this.inputChangedHandler}/>
       <p>Length of text: {this.state.inputLength}</p>
       <Validation inputLength={this.state.inputLength} />
       {inputArr.map((char, i) => {
         return <Char key={i} 
         char={inputArr[i]} 
         click={(event) => this.removeCharHandler(event, char)}/>
       })}
      </div>
    );
  }
}

export default App;

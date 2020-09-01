import React from 'react';
import axios from 'axios'
import './App.css';
import Card from './Card'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      myCard: [],
      followers: []
    }
  }

componentDidMount(){
  axios 
    .get ('https://api.github.com/users/Nelson-Singleton')
    .then (res => 
      this.setState ({
        myCard: res.data
        
      }))      
    .catch (err => console.log("Error"))
}

  render(){
  return (
    <div className="App">
     <Card mycard = {this.state.myCard} />
    </div>
  );
}
}

export default App;

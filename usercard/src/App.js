import React from 'react';
import axios from 'axios'
import './App.css';
import Card from './Card'
import Followers from './FollowerContainer'

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
    .catch (err => console.log("Error fetching usercard"))


  axios
      .get ('https://api.github.com/users/Nelson-Singleton/followers')
      .then (res =>
        this.setState({
          followers: res.data
        }))
    .catch (err => console.log("Error fetching followers"))

}
    

  render(){
  return (
    <div className="App">
     <Card mycard = {this.state.myCard} />
     <h3>My fellow students:</h3>
     <Followers followers = {this.state.followers}/>
    </div>
  );
}
}

export default App;

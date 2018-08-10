import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: [{
        name: "austin",
        picture: "http://http.cat/404"
      },{
        name: "dave",
        picture: "http://http.cat/420"
      }],
      name: '',
      picture: '',
    }
  }

  addFriend(){
    const friend = {
      name: this.state.name,
      picture: this.state.picture
    }
    const newFriends = this.state.friends.slice()
    newFriends.push(friend)
    this.setState({
      friends: newFriends
    })
  }

  deleteFriend(friend){
   const deleteMe = this.state.friends.findIndex( e => e.name == friend) 
   console.log(deleteMe)
    console.log("deleteFriend is working")
    this.state.friends.splice(deleteMe, 1)
    this.setState({
      friends : this.state.friends
    })
  }
  
  updateName(event) {
    this.setState({
      name: event.target.value
    })
  }

  updatePicture(event) {
    this.setState({
      picture: event.target.value
    })
  }

  render() {
    console.log(this.state.name)
    return (
      <div>
        <div>
          Name: <input value={this.state.name} onChange={event => this.updateName(event)} />
          Picture: <input value={this.state.picture} onChange={event => this.updatePicture(event)} />
          <button onClick={() => this.addFriend()}>Add friend</button>
          <button onClick={() => this.deleteFriend(this.state.name)}>delete friend</button>
        </div>
        {this.state.friends.map((friend, index) => {
          return <div key ={index}>
            Name:{friend.name} Picture:<img className="pic" src = {friend.picture}/>
          </div>
        })}
      </div>
    );
  }
}

export default App;

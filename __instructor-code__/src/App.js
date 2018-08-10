import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [{
        name: 'Tyler',
        picture: 'http://http.cat/404'
      }, {
        name: 'Aaron Davis',
        picture: 'http://http.cat/200'
      }],
      name: '',
      picture: ''
    }
  }

  updateName(event) {
    // NOOOOOOOOOOOO!
    // this.state.name = event.target.value;
    this.setState({
      name: event.target.value
    })
  }

  updatePicture(event) {
    this.setState({
      picture: event.target.value
    })
  }

  addFriend() {
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

  render() {
    return (
      <div>
        <div>
          Name: <input value={this.state.name} onChange={event => this.updateName(event)} />
        </div>
        <div>
          Picture: <input value={this.state.picture} onChange={event => this.updatePicture(event)} />
        </div>
        <div>
          <button onClick={() => this.addFriend()}>Add friend</button>
        </div>
        {this.state.friends.map((friend, index) => {
          return <div key={index}>
            Name: {friend.name} Picture: <img className="pic" src={friend.picture} />
          </div>
        })}
      </div>
    );
  }
}

export default App;

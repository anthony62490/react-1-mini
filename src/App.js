import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor()
  {
    super();
    this.state =
    {
      friends: [],
      picture: "",
      name: ""
    };
  }

  updateName = (val) => this.setState({name: val});

  updatePicture = (val) => this.setState({picture: val});

  addFriend = () =>
  {
    const {friends, picture, name} = this.state;
    let newFriends = friends.slice();
    newFriends.push(name);
    this.setState({friends: newFriends, picture: "", name: ""});
  };

  render() {
    let list = this.state.friends.map((e,i,arr) =>
    {
      return <div>{e}</div>;
    })

    return (
      <div>
        Picture:
        <input onChange={(e) => this.updatePicture(e.target.value)} value={this.state.picture} />

        Name:
        <input onChange={(e) => this.updateName(e.target.value)} value={this.state.name} />
        <button onClick={() => this.addFriend()}>Add Friend</button>

        <div>
          {list}
        </div>

      </div>
    );
  }
}

export default App;

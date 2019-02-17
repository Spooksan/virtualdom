import React, { Component } from 'react';
import Ninjas from "./Ninjas"
import AddNinja from "./AddNinja"

class App extends Component {
  state = {
    ninjas : [
      { name: 'Ryu',
        age: 30,
        belt: 'black',
        id: 1},
      {
        name: 'Yoshi',
        age: 20,
        belt: 'green',
        id: 2
      },
      {
        name: 'Crystal',
        age: 25,
        belt: 'pink',
        id: 3
      },
    ]
  }

addNinja = (ninja) =>{
  ninja.id = Math.random();
  let ninjas = [...this.state.ninjas, ninja]
  this.setState({
    // ninjas: ninjas.push(ninja); this is distructive and altering the state
    ninjas: ninjas
  })
}
deleteNinja = (id) => {
let ninjas = this.state.ninjas.filter(ninja=>{
  return ninja.id !== id
});
this.setState({
  ninjas: ninjas
})
}

  render() {
    return (
      <div className="App">
        <h1 className="app_head">My first react App</h1>
        <p>Welcome, this react app is for adding and deleting data using a virtual memory</p>
        <p>Similar to a To-Do application | Here we are adding data to a MMA dojo</p>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    )};
  }


export default App;

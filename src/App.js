import React, { Component } from 'react';

class App extends Component {
  render() {
    // const greeting = "Hi!!"
    // const dom = <h1 className="foo">{greeting}</h1> ;
    // return dom;
    // return <h1>Hello. world</h1>

    // return <input type="text" onClick={() => {console.log("I am Tom")}}    />

    // return <input type="text" onChange={() => {console.log("I am Change")}}    />

    return(
      <React.Fragment>
        <label htmlFor="bar">
          bar
        </label>
        <input type="text" onChange={() => {console.log("I am Change")}}    />
      </React.Fragment>
    )
  }
}

export default App;

import React from 'react';
// import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     // const greeting = "Hi!!"
//     // const dom = <h1 className="foo">{greeting}</h1> ;
//     // return dom;
//     // return <h1>Hello. world</h1>

//     // return <input type="text" onClick={() => {console.log("I am Tom")}}    />

//     // return <input type="text" onChange={() => {console.log("I am Change")}}    />

//     return(
//       <React.Fragment>
//         <label htmlFor="bar">
//           bar
//         </label>
//         <input type="text" onChange={() => {console.log("I am Change")}}    />
//       </React.Fragment>
//     )
//   }
// }

// functional component
const App = () => {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 14 },
    { name: "Hanako" }
  ]

  return(
    <div>
    {
      profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index}/>
      })
    }
    </div>
    // <div>
    //   <User name={"Taro"} age={10} />
    //   <User name={"Hanako"} age={30} />
    // </div>
  )
}

const User = (props) => {
  return <div>Hi,I am {props.name}, and {props.age} years old</div>
}

User.defaultProps = {
  age: 1
}

export default App;

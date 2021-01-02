// import React from 'react';
import { Fragment, useState } from 'react';
import './App.css';

// const App = () => {
//   return (
//     <React.Fragment>
//       <h1>Hello! React!!</h1>
//       <input type="text" />
//       <br />
//       <button>Click Me!</button>
//     </React.Fragment>
//   );
// }

const App = () => {
  const [text, setText] = useState(''); // useStateを利用

  const changedText = (e) => {
    setText(e.target.value);
  }

  const clickButton = () => {
    alert(text);
  }

  return (
    <Fragment>
      <h1>Hello! React!!</h1>
      <input type="text" value={text} onChange={changedText} />
      <br />
      <button onClick={clickButton}>Click Me!</button>
    </Fragment>
  );
}

// function App() {
//   return (
//     <div>
//       <h1>Hello! React!!</h1>
//       <input type="text" />
//       <br />
//       <button>Click Me!</button>
//     </div>
//   );
// }

export default App;

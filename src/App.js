import React from 'react';
import ReactDom from 'react-dom'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Join from './components/Join/join'
import Chat from './components/Chat/chat'

const App=()=>{
  return(
  <Router>
      <Route path="/" exact component={Join}></Route>
      <Route path="/chat" component={Chat}/>
  </Router>
  )
}

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

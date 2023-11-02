import './App.css';
import React from "react";
import headshot from './assets/headshot.jpg';
import Copyright from './copyright';
import FunnyDetector from './funnyDetector';

/*
  Server runs on port 3001
  - Can get the current build of the app on 3001
  - Access the api at 3001:/api
  - When start the react app on 3000, it still gets its info from the server at 3001:/api
*/

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={headshot} className="App-logo" alt="logo" />
        <p>
          {!data ? "Loading..." : data}
          <br/>
          <FunnyDetector/>
        </p>
      </header>
      <body className='App-body'>
        <Copyright year={2023}/>
      </body>
    </div>
  );
}

export default App;

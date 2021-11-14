import "./_css/main.css";

import Header from "./_components/Header";
import Landing from "./_pages/Landing";

function App() {
  return (
    <div className="App">
      <Landing />
      <div id="page">{/* <Header /> */}</div>
    </div>
  );
}

export default App;

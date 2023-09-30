import "./App.css";
import Animation from "./Components/Animation";
import Logo from "./assets/Images/logo.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Applogo">
          <img src={Logo} className="logo-img" alt="bridges entertainment" />
        </div>
        <Animation />
      </header>
    </div>
  );
}

export default App;

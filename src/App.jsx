import logo from "./logo.svg";
import "./App.css";
import MyComponents from "./components/MyComponents";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponets";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <MyComponents/>
        <ButtonComponent buttontext="bottone1" bgColor="blue" textSize="20"/>
        <ImageComponent immagine="https://th.bing.com/th/id/R.c09af61def225cc34bdcc417e26d5b6b?rik=mWk8e2wgIUxPhg&pid=ImgRaw&r=0" alt="natura" altezza="300" larghezza="800"/>
        <ButtonComponent buttontext="bottone2" bgColor="green" textSize="30"/>
        <ImageComponent immagine="https://th.bing.com/th/id/R.2cc008c051d2ced189091dbb6b4f70fe?rik=utnG85rYL5DbCw&pid=ImgRaw&r=0" alt="canyoning" altezza="400" larghezza="600" />
      </header>
    </div>
  );
}
export default App;

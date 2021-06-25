import './App.css';
import Header from './Components/Header.jsx';
import NavBar from './Components/navBarComp/navBar.jsx'
import Main from './Components/Main.jsx';
import Footer from './Components/Footer.jsx';
import Spaghetti from './Components/Spaghetti.jsx';
import Runner from './Components/Runner.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Main topic="SFO136"/>
      <Runner />
      <Footer />
      <Spaghetti />
    </div>
  );
}

export default App;

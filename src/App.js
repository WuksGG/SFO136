import './App.css';
import Header from './Components/Header.jsx';
import Juan from './Components/Juan/navBar.jsx'
import Cody from './Components/Cody/Main.jsx';
import Brian from './Components/Brian/Brian.jsx';
import Soohyung from './Components/Soohyung/Spaghetti.jsx';
import Runner from './Components/Cody/Runner.jsx';

function App() {
  return (
    <div className="App">
      <Header /> {/* Header/NavBar */}
      <Juan /> {/* Header/NavBar */}
      <Cody topic="SFO136"/>
      <Runner /> {/* Cody2 */}
      <Brian />
      <Soohyung />
    </div>
  );
}

export default App;

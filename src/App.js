import './App.css';
import Michael from './Components/Michael/Introduction.jsx';
import Juan from './Components/Juan/navBar.jsx'
import Cody from './Components/Cody/Main.jsx';
import Brian from './Components/Brian/Brian.jsx';
import Soohyung from './Components/Soohyung/Spaghetti.jsx';
import Runner from './Components/Cody/Runner.jsx'; // Cody 2
import Norman from './Components/Norman/Norman.js';
import Shandira from './Components/Shandira/caribCoder.jsx';
import Diego from './Components/Diego/diego.jsx';
import Nick from './Components/Doc/DocMain.jsx'
import Andrew from './Components/Andrew/jazzMan.jsx'
import Xing from './Components/Xing/xing.jsx'

function App() {
  return (
    <div className="App">
      <Michael /> {/* Header/NavBar */}
      <Juan /> {/* Header/NavBar */}
      <Cody topic="SFO136"/>
      <Runner /> {/* Cody2 */}
      <Brian />
      <Soohyung />
      <Norman />
      <Nick />
      <Diego />
      <Shandira />
      <Andrew />{/* Header/NavBar */}
      <Xing />
    </div>
  );
}

export default App;

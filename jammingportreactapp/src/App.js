import logo from './logo.svg';
import './App.css';
import SBF  from './SearchBar'
import RBF from './SearchResults'
import PBF from './Playlist'


function App() {

  return(
  <>
  <SBF />
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <div id="resultsandplaylist">
  <RBF />
  <PBF />
  </div>
  </>
  )
}

export default App;

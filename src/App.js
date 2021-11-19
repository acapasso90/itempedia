import './App.css';
import HousewareSearch from "./HouseWareSearch";
import WallMountedSearch from './WallMountedSearch';
import MiscSearch from './MiscSearch';
import ArtSearch from "./ArtSearch";
import { BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Routes>
              <Route exact  path="/" element={<HousewareSearch />} />
              <Route path="/wall" element={<WallMountedSearch />} />
              <Route path="/misc" element={<MiscSearch />} />
              <Route path="/art" element={<ArtSearch />} />
          </Routes>
          <footer>
            App made by <a href="https://www.amandacapasso.com" target="_blank" > Amanda Capasso </a>
          </footer>
        </div>
      </div>
    </Router>
  );
}

export default App;

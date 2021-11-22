import './App.css';
import HousewareSearch from "./HouseWareSearch";
import WallMountedSearch from './WallMountedSearch';
import MiscSearch from './MiscSearch';
import ArtSearch from "./ArtSearch";
import Header from "./Header";
import ScrollTop from './ScrollTop';
import { BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Routes>
              <Route exact  path="/" element={<HousewareSearch />} />
              <Route path="/wall" element={<WallMountedSearch />} />
              <Route path="/misc" element={<MiscSearch />} />
              <Route path="/art" element={<ArtSearch />} />
          </Routes>
          <ScrollTop />
          <footer>
            <div className="disclaimer">
                All images, information, quotes, and characters found on the app are the sole property of Nintendo and Animal Crossing and are only used for 
                non-commercial and educational purpose.
            </div>
            App made by <a href="https://www.amandacapasso.com" target="_blank" rel="noreferrer" > Amanda Capasso </a>
          </footer>
        </div>
      </div>
    </Router>
  );
}

export default App;

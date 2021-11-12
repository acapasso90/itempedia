import './App.css';
import HousewareSearch from "./HouseWareSearch";
import WallMountedSearch from './WallMountedSearch';
import MiscSearch from './MiscSearch';
import { BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
          <Route exact  path="/" element={<HousewareSearch />} />
          <Route path="/wall" element={<WallMountedSearch />} />
          <Route path="/misc" element={<MiscSearch />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;

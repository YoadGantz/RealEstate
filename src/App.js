import {
  BrowserRouter, Routes, Route
} from 'react-router-dom'
import RealEstate from './pages/RealEstate';
import Header from './components/Header';
import MapPage from './pages/MapPage';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/real-estate" element={<RealEstate />} />
          <Route path="/map" element={<MapPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


function Home() {
  return <h2>Welcome to Yoad's assignment</h2>;
}

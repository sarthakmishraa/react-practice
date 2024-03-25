import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import CatFact from './components/CatFact';
import AgeGuesser from './components/AgeGuesser';
import Excuser from './components/Excuser';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/excuser' element={<Excuser />} />
        <Route path='/catfact' element={<CatFact />} />
        <Route path='/ageguesser' element={<AgeGuesser />} />
      </Routes>
    </Router>
  );
}

export default App;
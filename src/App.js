import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import CatFact from './components/CatFact';
import BoredAPI from './components/BoredAPI';
import RandomFact from './components/RandomFact'
import AgeGuesser from './components/AgeGuesser';
import Excuser from './components/Excuser';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/ageguesser' element={<AgeGuesser />} />
          <Route path='/boredapi' element={<BoredAPI />} />
          <Route path='/catfact' element={<CatFact />} />
          <Route path='/excuser' element={<Excuser />} />          
          <Route path='/randomfact' element={<RandomFact />} />
          <Route path='*' element={<h1 className='text-center font-semibold text-4xl p-10'>Error 404: Looks like this page does not exist</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import CatFact from './components/CatFact';
import BoredAPI from './components/BoredAPI';
import RandomFact from './components/RandomFact'
import AgeGuesser from './components/AgeGuesser';
import Excuser from './components/Excuser';
import GenderGuess from './components/GenderGuess';
import Home from './components/Home';
import Profile from './components/Profile';
import Sidebar from './components/Sidebar';
import About from './components/About';
import { useState, createContext } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const AppContext = createContext();

function App() {
  const [username, setUsername] = useState('First');
  const client = new QueryClient();

  return (
    <div className='App'>
      <AppContext.Provider value={{username, setUsername}}>
        <QueryClientProvider client={client}>
          <Router>
            <Navbar />
            <Sidebar />
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/ageguesser' element={<AgeGuesser />} />
              <Route path='/boredapi' element={<BoredAPI />} />
              <Route path='/catfact' element={<CatFact />} />
              <Route path='/excuser' element={<Excuser />} />
              <Route path='/genderguess' element={<GenderGuess />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/randomfact' element={<RandomFact />} />
              <Route path='*' element={<h1 className='text-center font-semibold text-4xl p-10'>Error 404: Looks like this page does not exist</h1>} />
            </Routes>
          </Router>
        </QueryClientProvider>
      </AppContext.Provider>
    </div>
  );
}

export default App;
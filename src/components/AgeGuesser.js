import { useState } from 'react';
import axios from 'axios';

function AgeGuesser() {
  const [inputText, setInputText] = useState('');
  const [data, setData] = useState(null);

  const handleInput = (event) => {
    setInputText(event.target.value);
  }
  
  const predictAge = () => {
    axios.get(`https://api.agify.io/?name=${inputText}`).then((res) => {
      setData(res.data);
    })
  }

  return (
    <div className="AgeGuesser">
      <div className='grid justify-items-center mt-10'>
        <h1 className='mb-5 font-semibold py-3 text-4xl'>Age Guesser</h1>
        <input className='rounded-md border-solid border-2 border-black px-2 py-1 mb-5' type='text' onChange={handleInput} placeholder='Enter your name'/>
        <button className='active:scale-75 transition duration-50 mb-5 font-bold text-white py-2 px-3 bg-sky-500 hover:bg-sky-800 text-2xl rounded-md shadow-xl' onClick={predictAge}>Predict Age</button>
        {data ? (
          <h2 className='py-3 font-semibold text-2xl'>Predicted age of {data.name} is {data.age}</h2>
        ) : (
          <h2 className='py-3 font-semibold text-2xl'>Enter name and hit the Predict Age button</h2>
        )}
      </div>
    </div>
  );
}

export default AgeGuesser;

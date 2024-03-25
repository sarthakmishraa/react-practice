import { useState, useEffect } from 'react';
import axios from 'axios';

function CatFact() {
  const [text, setText] = useState('');
  const [textLength, setTextLength] = useState('');
  const shouldRun = false;

  const handleClick = () => {
    // fetch("https://catfact.ninja/fact")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setText(data.fact);
    //   });
    
    axios.get("https://catfact.ninja/fact").then((res) => {
      setText(res.data.fact);
      setTextLength(res.data.length);
    });
  }
  useEffect(() => {
    if(shouldRun) {
      handleClick();
    }
  }, [shouldRun]);

  return (
    <div className="CatFact">
      
      <div className='grid grid-cols-1 justify-items-center p-8 bg-slate-200'>
        <h1 className='mb-5'>Practice App</h1>
        {text ? (
          <button className='font-bold text-white py-2 px-3 bg-sky-500 hover:bg-sky-800 text-xl rounded-md shadow-xl' onClick={handleClick}>Generate another Cat Fact</button>
        ):(
          <button className='font-bold text-white py-2 px-3 bg-sky-500 hover:bg-sky-800 text-xl rounded-md shadow-xl' onClick={handleClick}>Generate Cat Fact</button>
        )}
      </div>

      <div className='grid justify-items-center'>
        {text ? (
          <>
            <h3 className='py-3'>Length of fact is {textLength}</h3>
            <h2 className='px-10'>{text}</h2>
          </>
        ) : (
          <h2>Hit the button to generate a cat fact</h2>
        )}
      </div>

    </div>
  );
}

export default CatFact;
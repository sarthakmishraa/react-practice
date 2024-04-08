import { useEffect, useState } from 'react';
import axios from 'axios';

function Excuser() {
  const [excuse, setExcuse] = useState(null);
  const shouldRun = false;

  const partyExcuseAPI = () => {
    axios.get("https://excuser-three.vercel.app/v1/excuse/party/").then((res) => {
      setExcuse(res.data[0].excuse);
    });
  }

  const officeExcuseAPI = () => {
    axios.get("https://excuser-three.vercel.app/v1/excuse/office/").then((res) => {
      setExcuse(res.data[0].excuse);
    });
  }

  const familyExcuseAPI = () => {
    axios.get("https://excuser-three.vercel.app/v1/excuse/family/").then((res) => {
      setExcuse(res.data[0].excuse);
    });
  }

  useEffect(() => {
    if(shouldRun) {
      partyExcuseAPI();
      officeExcuseAPI();
      familyExcuseAPI();
    }
  }, [shouldRun]);

  return (
    <div className="AgeGuesser">
      <div className='grid justify-items-center mt-10'>
        <h1 className='mb-5 font-semibold py-3 text-4xl'>Generate an excuse (axios, useEffect)</h1>
        <button className='active:scale-75 transition duration-50 mb-5 font-bold text-white py-2 px-5 bg-sky-500 hover:bg-sky-800 text-2xl rounded-md shadow-xl' onClick={partyExcuseAPI}>Party</button>
        <button className='active:scale-75 transition duration-50 mb-5 font-bold text-white py-2 px-5 bg-sky-500 hover:bg-sky-800 text-2xl rounded-md shadow-xl' onClick={familyExcuseAPI}>Family</button>        
        <button className='active:scale-75 transition duration-50 mb-5 font-bold text-white py-2 px-5 bg-sky-500 hover:bg-sky-800 text-2xl rounded-md shadow-xl' onClick={officeExcuseAPI}>Office</button>
        {excuse ? (<h2 className='text-2xl font-semibold px-10 py-3'>{excuse}</h2>) : (<h2 className='text-2xl font-semibold px-10 py-3'>Hit Party/Family/Office button to generate an excuse</h2>)}
      </div>
    </div>
  );
}

export default Excuser;
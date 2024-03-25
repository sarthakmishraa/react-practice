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
        <h1 className='font-semibold py-2'>Generate an Excuse</h1>
        <button className='mb-3 font-bold text-white py-2 px-3 bg-sky-500 hover:bg-sky-800 text-xl rounded-md shadow-xl' onClick={partyExcuseAPI}>Party</button>
        <button className='mb-3 font-bold text-white py-2 px-3 bg-sky-500 hover:bg-sky-800 text-xl rounded-md shadow-xl' onClick={familyExcuseAPI}>Family</button>        
        <button className='mb-3 font-bold text-white py-2 px-3 bg-sky-500 hover:bg-sky-800 text-xl rounded-md shadow-xl' onClick={officeExcuseAPI}>Office</button>
        {excuse ? (<h2 className='font-semibold px-10 py-3'>{excuse}</h2>) : (<h2 className='font-semibold px-10 py-3'>Hit Party/Family/Office button to generate an office excuse</h2>)}
      </div>
    </div>
  );
}

export default Excuser;
import axios from "axios";
import { useState } from "react";

function RandomFact() {
  const [todaysFact, setTodaysFact] = useState('');
  const [randomfact, setRandomFact] = useState('');

  axios.get("https://uselessfacts.jsph.pl/api/v2/facts/today").then((res) => {
    setTodaysFact(res.data.text);
  });

  const getRandomFact = () => {
    axios.get("https://uselessfacts.jsph.pl/api/v2/facts/random").then((res) => {
      setRandomFact(res.data.text);
    })
  }

  return (
    <div className="grid grid-cols-1 justify-items-center mt-10">
      <h1 className="mb-5 font-semibold py-3 text-4xl">Get useless random facts</h1>
      {todaysFact ? (
        <h2 className="mb-5 font-semibold py-3 text-2xl mb-20">Random useless fact of the day: {todaysFact}</h2>
      ) : (
        <h2 className="mb-5 font-semibold py-3 text-2xl mb-20">Unable to get today's fact</h2>
      )}
      
      <h2 className="mb-5 font-semibold py-3 text-2xl">Hit the button to get a random fact</h2>
      <button className="active:scale-75 transition duration-50 text-2xl font-bold text-white py-2 px-3 bg-sky-500 hover:bg-sky-800 text-xl rounded-md shadow-xl" onClick={getRandomFact}>Random Fact</button>
      <h2 className="font-semibold py-3 text-wrap text-2xl">{randomfact}</h2>
    </div>
  );
}

export default RandomFact;
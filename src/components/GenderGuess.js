// GenderGuess.js
import axios from "axios";
import { useState } from "react";

const GenderGuess = () => {
  const [name, setName] = useState("");
  const [genderGuessed, setGenderGuessed] = useState("");

  const guessGender = () => {
    axios.get(`https://api.genderize.io/?name=${name}`).then((res) => {
      setGenderGuessed(res.data.gender);
      console.log(res.data);
    });
  }

  return(
    <div className="grid justify-items-center mt-10">
      <h1 className="mb-5 font-semibold py-3 text-4xl">Gender Guesser</h1>
      <p className="font-semibold text-2xl mb-5">Enter your first name</p>
      <input className='rounded-md border-solid border-2 border-black px-2 py-1 mb-5' type="text" placeholder="Enter first name here" onChange={(event) => {setName(event.target.value)}} />
      <button className="active:scale-75 transition duration-50 mb-5 font-bold text-white py-2 px-3 bg-sky-500 hover:bg-sky-800 text-2xl rounded-md shadow-xl" onClick={guessGender}>Guess</button>
      <h2 className="py-3 font-semibold text-2xl">{ genderGuessed }</h2>
    </div>
  )
}

export default GenderGuess;
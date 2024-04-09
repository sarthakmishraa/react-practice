import { Link } from "react-router-dom";
import { useState } from "react";

function Sidebar() {
  const [showButton, setShowButton] = useState(false);
  
  return (
    <div className="h-100% w-160px fixed z-1 left-0 p-5 bg-gradient-to-t from-sky-400 to-sky-100 rounded-b-xl shadow-xl" onMouseEnter={() => {setShowButton(true)}} onMouseLeave={() => {setShowButton(false)}}>
      <button className="active:scale-75 transition duration-50 text-2xl font-bold text-white py-2 px-3 bg-sky-500 hover:bg-sky-800 text-3xl rounded-md shadow-xl my-2">☰ Menu</button>
      {showButton &&
        <div className="mt-5">
          <li className='list-none mb-3 font-bold text-slate-300 py-2 px-3 bg-sky-800 hover:bg-sky-600 text-xl rounded-md shadow-xl'><Link to="/profile">Profile</Link></li>
          <li className='list-none mb-3 font-bold text-slate-300 py-2 px-3 bg-sky-800 hover:bg-sky-600 text-xl rounded-md shadow-xl'><Link to="/form">Form</Link></li>
          <li className='list-none mb-3 font-bold text-slate-300 py-2 px-3 bg-sky-800 hover:bg-sky-600 text-xl rounded-md shadow-xl'><Link to="/counter">Counter</Link></li>
          <li className='list-none mb-3 font-bold text-slate-300 py-2 px-3 bg-sky-800 hover:bg-sky-600 text-xl rounded-md shadow-xl'><Link to="/excuser">Get an excuse</Link></li>
          <li className='list-none mb-3 font-bold text-slate-300 py-2 px-3 bg-sky-800 hover:bg-sky-600 text-xl rounded-md shadow-xl'><Link to="/catfact">Cat Fact</Link></li>
          <li className='list-none mb-3 font-bold text-slate-300 py-2 px-3 bg-sky-800 hover:bg-sky-600 text-xl rounded-md shadow-xl'><Link to="/randomfact">Random Fact</Link></li>
          <li className='list-none mb-3 font-bold text-slate-300 py-2 px-3 bg-sky-800 hover:bg-sky-600 text-xl rounded-md shadow-xl'><Link to="/boredapi">Do something</Link></li>
          <li className='list-none mb-3 font-bold text-slate-300 py-2 px-3 bg-sky-800 hover:bg-sky-600 text-xl rounded-md shadow-xl'><Link to="/ageguesser">Age Guesser</Link></li>
          <li className='list-none mb-3 font-bold text-slate-300 py-2 px-3 bg-sky-800 hover:bg-sky-600 text-xl rounded-md shadow-xl'><Link to="/genderguess">Gender Guesser</Link></li>
        </div>
      }
    </div>
  );
}

export default Sidebar;
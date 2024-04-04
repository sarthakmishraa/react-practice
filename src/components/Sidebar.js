import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="h-100% w-160px fixed z-1 left-0 p-5 bg-gradient-to-t from-sky-400 to-sky-100 rounded-b-xl shadow-xl">
      <li className='list-none mb-3 font-bold text-slate-300 py-2 px-3 bg-sky-800 hover:bg-sky-600 text-xl rounded-md shadow-xl'><Link to="/profile">Profile</Link></li>
      <li className='list-none mb-3 font-bold text-slate-300 py-2 px-3 bg-sky-800 hover:bg-sky-600 text-xl rounded-md shadow-xl'><Link to="/excuser">Get an excuse</Link></li>
      <li className='list-none mb-3 font-bold text-slate-300 py-2 px-3 bg-sky-800 hover:bg-sky-600 text-xl rounded-md shadow-xl'><Link to="/catfact">Cat Fact</Link></li>
      <li className='list-none mb-3 font-bold text-slate-300 py-2 px-3 bg-sky-800 hover:bg-sky-600 text-xl rounded-md shadow-xl'><Link to="/randomfact">Random Fact</Link></li>
      <li className='list-none mb-3 font-bold text-slate-300 py-2 px-3 bg-sky-800 hover:bg-sky-600 text-xl rounded-md shadow-xl'><Link to="/boredapi">Do something</Link></li>
      <li className='list-none mb-3 font-bold text-slate-300 py-2 px-3 bg-sky-800 hover:bg-sky-600 text-xl rounded-md shadow-xl'><Link to="/ageguesser">Age Guesser</Link></li>
      <li className='list-none mb-3 font-bold text-slate-300 py-2 px-3 bg-sky-800 hover:bg-sky-600 text-xl rounded-md shadow-xl'><Link to="/genderguess">Gender Guesser</Link></li>
    </div>
  );
}

export default Sidebar;
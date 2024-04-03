import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="shadow-2xl bg-gradient-to-r from-sky-400 to-sky-100">
      <nav className="max-w-screen-xl mx-auto px-10 py-5 flex flex-wrap items-center justify-between">
        <li className='list-none mb-3 font-bold text-slate-300 py-2 px-3 bg-sky-800 hover:bg-sky-600 text-xl rounded-md shadow-xl'><Link to="/">Home</Link></li>
        <li className='list-none mb-3 font-bold text-slate-300 py-2 px-3 bg-sky-800 hover:bg-sky-600 text-xl rounded-md shadow-xl'><Link to="/profile">Profile</Link></li>
        <li className='list-none mb-3 font-bold text-slate-300 py-2 px-3 bg-sky-800 hover:bg-sky-600 text-xl rounded-md shadow-xl'><Link to="/excuser">Get an excuse</Link></li>
        <li className='list-none mb-3 font-bold text-slate-300 py-2 px-3 bg-sky-800 hover:bg-sky-600 text-xl rounded-md shadow-xl'><Link to="/catfact">Cat Fact</Link></li>
        <li className='list-none mb-3 font-bold text-slate-300 py-2 px-3 bg-sky-800 hover:bg-sky-600 text-xl rounded-md shadow-xl'><Link to="/randomfact">Random Fact</Link></li>
        <li className='list-none mb-3 font-bold text-slate-300 py-2 px-3 bg-sky-800 hover:bg-sky-600 text-xl rounded-md shadow-xl'><Link to="/boredapi">Do something</Link></li>
        <li className='list-none mb-3 font-bold text-slate-300 py-2 px-3 bg-sky-800 hover:bg-sky-600 text-xl rounded-md shadow-xl'><Link to="/ageguesser">Age Guesser</Link></li>
        <li className='list-none mb-3 font-bold text-slate-300 py-2 px-3 bg-sky-800 hover:bg-sky-600 text-xl rounded-md shadow-xl'><Link to="/genderguess">Gender Guesser</Link></li>
        <li className='list-none mb-3 font-bold text-slate-300 py-2 px-3 bg-sky-800 hover:bg-sky-600 text-xl rounded-md shadow-xl'><Link to="/about">About Sarthak</Link></li>
      </nav>
    </div>
  );
}

export default Navbar;
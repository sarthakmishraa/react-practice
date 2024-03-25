import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar">
      <nav className="max-w-screen-xl mx-auto p-4 flex flex-wrap items-center justify-between">
        <li className='list-none mb-3 font-bold text-white py-2 px-3 bg-sky-700 hover:bg-sky-800 text-xl rounded-md shadow-xl'><Link to="/">Home</Link></li>
        <li className='list-none mb-3 font-bold text-white py-2 px-3 bg-sky-700 hover:bg-sky-800 text-xl rounded-md shadow-xl'><Link to="/excuser">Generate an excuse</Link></li>
        <li className='list-none mb-3 font-bold text-white py-2 px-3 bg-sky-700 hover:bg-sky-800 text-xl rounded-md shadow-xl'><Link to="/catfact">Generate a cat fact</Link></li>
        <li className='list-none mb-3 font-bold text-white py-2 px-3 bg-sky-700 hover:bg-sky-800 text-xl rounded-md shadow-xl'><Link to="/ageguesser">Age Guesser</Link></li>  
      </nav>
    </div>
  );
}

export default Navbar;
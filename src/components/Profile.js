import { useState, useContext } from "react";
import { AppContext } from '../App';

function Profile() {
  const [newUsername, setNewUsername] = useState('');
  const {setUsername } = useContext(AppContext);
  
  return (
    <>
      <div className="bg-slate-200 p-5 mt-10">
        <h1 className="font-semibold ml-10 text-2xl text-center">Profile Page (AppContext)</h1>
      </div>
      <div className="grid justify-items-center mt-5 gap-y-3">
        <h2 className="text-2xl text-center font-semibold">Set a new username</h2>
        <input type="text" className="rounded-md border-solid border-2 border-black p-3" onChange={(event) => {setNewUsername(event.target.value)}} placeholder="Enter new username" />
        <button className="active:scale-75 transition duration-50 mb-5 font-bold text-white py-2 px-3 bg-sky-500 hover:bg-sky-800 text-2xl rounded-md shadow-xl" onClick={() => {alert("Username changed successfully. Go to homepage to see updated username");setUsername(newUsername)}}>Change username</button>
      </div>
    </>
  );
}

export default Profile;
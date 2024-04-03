import { useState, useContext } from "react";
import { AppContext } from '../App';

function Profile() {
  const [newUsername, setNewUsername] = useState('');
  const {setUsername } = useContext(AppContext);
  
  return (
    <>
      <div className="bg-slate-200 p-5 mt-10">
        <h1 className="font-semibold ml-10">Profile Page</h1>
      </div>
      <div className="grid justify-items-center mt-5 gap-y-3">
        <h2 className="text-2xl text-center font-semibold">Set a new username</h2>
        <input type="text" className="rounded-md border-solid border-2 border-black p-3 ml-10" onChange={(event) => {setNewUsername(event.target.value)}} placeholder="Enter new username" />
        <button className="bg-blue-600 p-3 ml-10 rounded-md text-white text-lg font-semibold" onClick={() => {setUsername(newUsername);alert("Username changed successfully. Go to homepage to see updated username")}}>Change username</button>
      </div>
    </>
  );
}

export default Profile;
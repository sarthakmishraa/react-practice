import { useContext } from "react";
import { AppContext } from "../App";

function Home() {
  const { username } = useContext(AppContext);
  return (
    <>
      <div className="bg-slate-200 py-5 px-5 mt-10">
        <h1 className="font-semibold text-2xl text-center ml-10">Home Page (useContext, AppContext)</h1>
      </div>
      <h2 className="p-5 text-2xl text-center font-semibold">Current username: {username}</h2>

      <h2 className="absolute inset-x-0 pb-10 bottom-0 text-2xl text-blue-700 text-center font-semibold"><a href="https://github.com/sarthakmishraa/react-practice" rel="noreferrer"  target="_blank">GitHub</a></h2>
    </>
  );
}

export default Home;
import { useContext } from "react";
import { AppContext } from "../App";

function Home() {
  const { username } = useContext(AppContext);
  return (
    <>
      <div className="bg-slate-200 py-5 px-5 mt-10">
        <h1 className="font-semibold ml-10">Home Page</h1>
      </div>
      <h2 className="p-5 text-2xl text-center font-semibold">Current username: {username}</h2>
    </>
  );
}

export default Home;
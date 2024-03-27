import axios from "axios";
import { useState } from "react";

function BoredAPI() {
  const [participants, setParticipants] = useState(1);
  const [activity, setActivity] = useState('');
  const [activityType, setActivityType] = useState('');

  const generateBoredAPI = (participants) => {
    axios.get(`http://www.boredapi.com/api/activity?type=${activityType}&?participants=${participants}`).then((res) => {
      setActivity(res.data.activity);
    })
  }

  return (
    <div className="grid grid-cols-1 justify-items-center mt-10">
      <h1 className="mb-5 font-semibold py-3 text-4xl">Lets get you do something and kill your boredom</h1>
      <h2 className="font-semibold text-2xl mb-5">Enter no of participants</h2>
      <input className="rounded-md border-solid border-2 border-black px-2 py-1 mb-5" type="number" placeholder="Default is 1" onChange={(event) => {setParticipants(event.target.value)}}/>
      
      <h2 className="font-semibold text-2xl mb-5">Select the type of activity (default: random)</h2>
      <div className="grid grid-cols-3 grid-flow-col gap-4 mb-5">
      <div>
          <div>
            <input type="radio" name="activityType" value="social" className="w-6 h-6" onClick={() => {setActivityType('social')}} />
            <label className="text-xl ms-2">Social</label>
          </div>
          <div>
            <input type="radio" name="activityType" value="music" className="w-6 h-6" onClick={() => {setActivityType('music')}} />
            <label className="text-xl ms-2">Music</label>
          </div>
          
          <div>
            <input type="radio" name="activityType" value="charity" className="w-6 h-6" onClick={() => {setActivityType('charity')}} />
            <label className="text-xl ms-2">Charity</label>
          </div>
        </div>        
        <div>
          <div>
            <input type="radio" name="activityType" value="cooking" className="w-6 h-6" onClick={() => {setActivityType('cooking')}} />
            <label className="text-xl ms-2">Cooking</label>
          </div>
          <div>
            <input type="radio" name="activityType" value="relaxation" className="w-6 h-6" onClick={() => {setActivityType('relaxation')}} />
            <label className="text-xl ms-2">Relaxation</label>
          </div>
          <div>
            <input type="radio" name="activityType" value="diy" className="w-6 h-6" onClick={() => {setActivityType('diy')}} />
            <label className="text-xl ms-2">Do It Yourself</label>
          </div>
        </div>
        <div>
          <div>
            <input type="radio" name="activityType" value="education" className="w-6 h-6" onClick={() => {setActivityType('education')}} />
            <label className="text-xl ms-2">Education</label>
          </div>
          <div>
            <input type="radio" name="activityType" value="busywork" className="w-6 h-6" onClick={() => {setActivityType('busywork')}} />
            <label className="text-xl ms-2">Busy Work</label>
          </div>
          <div>
            <input type="radio" name="activityType" value="recreational" className="w-6 h-6" onClick={() => {setActivityType('recreational')}} />
            <label className="text-xl ms-2">Recreational</label>
          </div>
        </div>
      </div>

      <button className="active:scale-75 transition duration-50 text-2xl font-bold text-white py-2 px-3 bg-sky-500 hover:bg-sky-800 text-xl rounded-md shadow-xl" onClick={() => {generateBoredAPI(participants)}}>Submit</button>
      {activity ? (<h3 className="font-semibold text-2xl mt-5">{activity}</h3>) : (<h3 className="font-semibold text-2xl mt-5">Enter no of participants and then hit the button</h3>)}
    </div>
  );
}

export default BoredAPI;
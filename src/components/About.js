import profilePic from '../media/profile-pic.jpg';

function About() {
  return (
    <div className="text-center grid space-x-10 space-y-5">
      <h1 className="font-semibold text-4xl py-2 mt-10">About Me</h1>
      <div className="">
        <img src={profilePic} className='mx-auto h-80 rounded-lg shadow-xl dark:shadow-gray-800 transition-all duration-100 cursor-pointer filter' alt='Sarthak Mishra Profile'/>
      </div>
      <h3 className="font-semibold text-2xl">Sarthak Mishra</h3>
      <div className="flex justify-center space-x-3">
        <a  className='font-semibold' href="https://www.linkedin.com/in/sarthakmishraa/" target="_blank" rel="noopener noreferrer"><button className='mb-5 font-bold text-white py-2 px-5 bg-sky-500 hover:bg-sky-800 text-l rounded-md shadow-xl'>LinkedIn</button></a>
        <a className='font-semibold' href="https://github.com/sarthakmishraa" target="_blank" rel="noopener noreferrer"><button className='mb-5 font-bold text-white py-2 px-5 bg-sky-500 hover:bg-sky-800 text-l rounded-md shadow-xl'>Github</button></a>
        <a className='font-semibold' href="http://sarthakmishra.lovestoblog.com/?i=2" target="_blank" rel="noopener noreferrer"><button className='mb-5 font-bold text-white py-2 px-5 bg-sky-500 hover:bg-sky-800 text-l rounded-md shadow-xl'>Portfolio</button></a>
      </div>
      <p>I did my Masters in Computer Science from University at Buffalo, USA. I did my undergrad in India in Computer Science.</p>
    </div>
  );
}

export default About;
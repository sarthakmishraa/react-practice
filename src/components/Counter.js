import { useCount } from '../hooks/useCount';

const Counter = () => {
    const { state, increase, decrease, reset } = useCount();
    return(
        <div className='grid justify-items-center mt-10'>
            <h2 className='mb-5 font-semibold py-3 text-4xl'>Counter (Custom Hook - useCount)</h2>
            <button type="submit" className='active:scale-75 transition duration-50 mb-5 font-bold text-white py-2 px-3 bg-sky-500 hover:bg-sky-800 text-2xl rounded-md shadow-xl' onClick={increase}>Increment by 1</button>
            <button type="submit" className='active:scale-75 transition duration-50 mb-5 font-bold text-white py-2 px-3 bg-sky-500 hover:bg-sky-800 text-2xl rounded-md shadow-xl' onClick={decrease}>Decrement by 1</button>
            <button type="submit" className='active:scale-75 transition duration-50 mb-5 font-bold text-white py-2 px-3 bg-sky-500 hover:bg-sky-800 text-2xl rounded-md shadow-xl' onClick={reset}>Restart</button>
            <h2 className='font-semibold py-3 text-4xl'>{ state }</h2>
        </div>
    )
}

export default Counter;
import {useState, useContext, useEffect, useRef} from 'react';
import { Link } from "react-router-dom"; 
import { dataContext } from './Home.jsx';

function Counter() {

   const [count, setCount] = useState(0);
   let countRef = useRef(0);
  function increment() {
    setCount(count + 1);
    countRef.current = countRef.current + 1;
    //countRef.current++;
    console.log('count '+ count)// asyn callback that will be executed after rendering
    console.log('countRef'+ countRef.current); // not affected by rendering
  }
   function decrement() {
    setCount(count - 1);
  }
useEffect(()=>{
    // console.log(count);
    // console.log(countRef.current);
},);

const data = useContext(dataContext);

    return (
        <>
        <Link to="/">Go Home</Link>
        <h2>{data}</h2>
        <h2 className='m-5'>{count}</h2>
        <button className='btn btn-primary m-4' onClick={increment}>+</button>
        <button className='btn btn-primary m-4' onClick={decrement}>-</button>
        </>
        )
}
export default Counter;
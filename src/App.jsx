import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Plus_one } from "./redux/modules/counter";
import { minus_one } from "./redux/modules/counter";
import { PlusN } from "./redux/modules/counter";
import { MinusN } from "./redux/modules/counter";


function App(){
  const [number, setNumber] = useState(0)

  //여기에서 store에 접근하여, counter의 값을 읽어오고 싶다.
  // useSelector
const counter = useSelector((state) => {
  return state.counter;
})

const dispatch = useDispatch();

  return (
  <div>
    현재 카운트 : {counter.number}
    <input value={number} type='number' onChange={(event)=>setNumber(event.target.value)}/>
    <button onClick={()=> {
      dispatch(PlusN(number));
    }}>+</button>
    <button onClick={()=> {
      dispatch(MinusN(number));
    }}>-</button>
  </div>)
}

export default App;
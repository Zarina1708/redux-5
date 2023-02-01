
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useSelector } from "react-redux/es/exports";
import { inputValueAction, numberSumAction } from "../redux/actions/actions";



export default function Page() {

  const dispatch = useDispatch();
  const numbers = useSelector(store => store.reducer.summ);

  function inputValue(e) {
    dispatch(inputValueAction(e.target.value));
  }

  function numberSum() {
    dispatch(numberSumAction());
  }


  return (

    <div>
      <input onChange={inputValue}  type='number' />
      <button onClick={numberSum}>add</button>
      <button >clear</button>
      <ul>
        { numbers.map((number, key) => <li key={key}>{number}</li>)}
      </ul>
    </div>

  );
}
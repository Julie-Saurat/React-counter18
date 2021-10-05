import { useSelector, useDispatch } from 'react-redux';

import { counterActions } from '../store/counter';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);

  function incrementCounterHandler() {
    dispatch(counterActions.increment());  //increment is a method creating, when executed, a full action object with the type set and unique action identifier created by Redux Toolkit automatically
  };

  function increaseCounterHandler() {
    dispatch(counterActions.increase(10)); // when a payload is needed by the slice method => pass the data by an object with any property pairs we need or any value needed
    // In fact Redux Toolkit create this action object: { type: UNIQUE_IDENTIFIER , payload: value passed to the method }
  };

  function decrementCounterHandler() {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementCounterHandler}>Increment</button>
        <button onClick={increaseCounterHandler}>Increase by 10</button>
        <button onClick={decrementCounterHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

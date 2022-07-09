import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { increment, decrement, reset, incrementByAmount, decrementByAmount } from './CounterSlice'
import { useState } from 'react'
import './Counter.css';

const Counter = () => {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(0);

    const addValue = Number(amount) || 0 ;  // if amount is not a number, set it to 0

    const subtractValue = Number(amount) || 0 ; // if amount is not a number, set it to 0

    const resetAll = () => {
        dispatch(reset());
        setAmount(0);
    }

  return (
    <section >
        <p>{count}</p>
        <div>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(reset())}>reset</button>
        </div>

        <input 
        className='amountInput'
        type='text'
        value={amount}
        onChange={e => setAmount(e.target.value)}
        />

        <div className='amount'>
            <button onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount{amount}</button>
            <button onClick={() => dispatch(decrementByAmount(subtractValue))}>Reduce Amount{amount}</button>
            <button onClick={() => resetAll()}>ResetAll</button>
        </div>
    </section>
  )
}

export default Counter
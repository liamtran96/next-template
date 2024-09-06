"use client";

import { useState } from "react";
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  incrementIfOdd,
  selectCount,
  selectStatus,
} from "@/lib/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

export const Counter = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const status = useAppSelector(selectStatus);
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;
  console.log("liam",{count, status, incrementAmount})

  return (
    <div>
      <div className="flex items-center justify-center mb-4">
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          className="appearance-none bg-none text-4xl px-3 pb-1 outline-none border-2 border-transparent text-purple-700 bg-purple-100 rounded-sm transition-all duration-150 hover:border-purple-400 focus:border-purple-400 active:bg-purple-200"
        >
          -
        </button>
        <span
          aria-label="Count"
          className="text-7xl px-4 mt-1 font-mono"
        >
          {count}
        </span>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          className="appearance-none bg-none text-4xl px-3 pb-1 outline-none border-2 border-transparent text-purple-700 bg-purple-100 rounded-sm transition-all duration-150 hover:border-purple-400 focus:border-purple-400 active:bg-purple-200 ml-1"
        >
          +
        </button>
      </div>
      <div className="flex items-center justify-center">
        <input
          aria-label="Set increment amount"
          value={incrementAmount}
          type="number"
          onChange={(e) => setIncrementAmount(e.target.value)}
          className="text-4xl p-1 w-16 text-center mr-1 text-black"
        />
        <button
          onClick={() => dispatch(incrementByAmount(incrementValue))}
          className="appearance-none bg-none text-4xl px-3 pb-1 outline-none border-2 border-transparent text-purple-700 bg-purple-100 rounded-sm transition-all duration-150 hover:border-purple-400 focus:border-purple-400 active:bg-purple-200 mr-1"
        >
          Add Amount
        </button>
        <button
          onClick={() => dispatch(incrementAsync(incrementValue))}
          disabled={status !== "idle"}
          className="appearance-none bg-none text-4xl px-3 pb-1 outline-none border-2 border-transparent text-purple-700 bg-purple-100 rounded-sm transition-all duration-150 hover:border-purple-400 focus:border-purple-400 active:bg-purple-200 relative after:content-[''] after:bg-purple-200 after:block after:absolute after:w-full after:h-full after:left-0 after:top-0 after:opacity-0 after:transition-all after:duration-[1s] after:linear after:opacity-0 after:active:w-0 after:active:opacity-100"
        >
          Add Async
        </button>
        <button
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
          className="appearance-none bg-none text-4xl px-3 pb-1 outline-none border-2 border-transparent text-purple-700 bg-purple-100 rounded-sm transition-all duration-150 hover:border-purple-400 focus:border-purple-400 active:bg-purple-200 ml-1"
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
};

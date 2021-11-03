import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function AddTransaction() {
  const [state, dispatch] = useContext(GlobalContext);

  return (
    <div>
      <button
        className="btn-income"
        onClick={() =>
          dispatch({
            type: "OPEN_ADD_INCOME",
            payload: !state.addIncome,
          })
        }
      >
        Add Income
      </button>
      <button
        className="btn-expense"
        onClick={() =>
          dispatch({
            type: "OPEN_ADD_EXPENSE",
            payload: !state.addExpense,
          })
        }
      >
        Add Expense
      </button>
    </div>
  );
}

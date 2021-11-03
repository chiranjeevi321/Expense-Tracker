import React, { useState, useRef, useEffect, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export function AddIncome() {
  const [state, dispatch] = useContext(GlobalContext);
  const [incomeName, setIncomeName] = useState("");
  const [incomeAmount, setIncomeAmount] = useState("");
  const inputIncome = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (!incomeName || !incomeAmount) {
      alert("Both Income name and amount are required");
    } else {
      dispatch({
        type: "ADD_TRANSACTION",
        payload: {
          name: incomeName,
          amount: parseFloat(incomeAmount),
          type: "income",
          id: Date.now(),
        },
      });

      setIncomeName("");
      setIncomeAmount("");
      inputIncome.current.focus();
    }
  }

  useEffect(() => {
    if (state.addIncome) {
      inputIncome.current.focus();
    } else {
      return;
    }
  }, [state.addIncome]);

  return (
    <>
      {state.addIncome ? (
        <div className="modal">
          <div className="modal-content">
            <p>Enter your income details</p>
            <form onSubmit={handleSubmit}>
              <label htmlFor="income">Income name</label>
              <input
                type="text"
                placeholder="e.g salary"
                name="income"
                value={incomeName}
                onChange={(e) => setIncomeName(e.target.value)}
                ref={inputIncome}
              />
              <label htmlFor="amount">Amount</label>
              <input
                type="number"
                placeholder="e.g 50000"
                name="amount"
                value={incomeAmount}
                onChange={(e) => setIncomeAmount(e.target.value)}
              />
              <button>Add</button>
            </form>
            <button
              className="exit-modal"
              onClick={() =>
                dispatch({
                  type: "OPEN_ADD_INCOME",
                  payload: !state.addIncome,
                })
              }
            >
              Finish
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export function AddExpense() {
  const [state, dispatch] = useContext(GlobalContext);
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const inputExpense = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (!expenseName || !expenseAmount) {
      alert("Both Income name and amount are required");
    } else {
      dispatch({
        type: "ADD_TRANSACTION",
        payload: {
          name: expenseName,
          amount: parseFloat(expenseAmount),
          type: "expense",
          id: Date.now(),
        },
      });

      setExpenseName("");
      setExpenseAmount("");
      inputExpense.current.focus();
    }
  }

  useEffect(() => {
    if (state.addExpense) {
      inputExpense.current.focus();
    } else {
      return;
    }
  }, [state.addExpense]);

  return (
    <>
      {state.addExpense ? (
        <div className="modal">
          <div className="modal-content">
            <p style={{ color: "#e74c3c" }}>Enter your expense details</p>
            <form onSubmit={handleSubmit}>
              <label htmlFor="expense">Expense name</label>
              <input
                type="text"
                placeholder="e.g groceries"
                name="expense"
                value={expenseName}
                onChange={(e) => setExpenseName(e.target.value)}
                ref={inputExpense}
              />
              <label htmlFor="amount">Amount</label>
              <input
                type="number"
                placeholder="e.g 500"
                name="amount"
                value={expenseAmount}
                onChange={(e) => setExpenseAmount(e.target.value)}
              />
              <button
                style={{
                  border: "3px solid #e74c3c",
                  backgroundColor: "#e74c3c",
                }}
              >
                Add
              </button>
            </form>
            <button
              className="exit-modal"
              style={{ border: "2px solid #e74c3c", color: "#e74c3c" }}
              onClick={() =>
                dispatch({
                  type: "OPEN_ADD_EXPENSE",
                  payload: !state.addExpense,
                })
              }
            >
              Finish
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export function IncomeTransaction({ name, amount, index }) {
  const [state, dispatch] = useContext(GlobalContext);

  function deleteTransaction(index) {
    const updatedTransactions = state.transactions.filter(
      (transaction) => transaction.id !== index
    );

    dispatch({
      type: "DELETE_TRANSACTION",
      payload: updatedTransactions,
    });
  }

  return (
    <div className="income-trans">
      <div className="transaction-row">
        <button className="deleteBtn" onClick={() => deleteTransaction(index)}>
          ❌
        </button>
        <p>{name}</p>
        <p>{amount}</p>
      </div>
    </div>
  );
}

export function ExpenseTransaction({ name, amount, index }) {
  const [state, dispatch] = useContext(GlobalContext);

  function deleteTransaction(index) {
    const updatedTransactions = state.transactions.filter(
      (transaction) => transaction.id !== index
    );

    dispatch({
      type: "DELETE_TRANSACTION",
      payload: updatedTransactions,
    });
  }
  return (
    <div className="expense-trans">
      <div className="transaction-row">
        <button className="deleteBtn" onClick={() => deleteTransaction(index)}>
          ❌
        </button>
        <p>{name}</p>
        <p>{amount}</p>
      </div>
    </div>
  );
}

export default function History() {
  const [state] = useContext(GlobalContext);
  const { transactions } = state;

  return (
    <div className="history-card">
      <p className="history-card-title">History</p>
      <div className="history-card-content">
        {transactions.map((item) =>
          item.type === "income" ? (
            <IncomeTransaction
              name={item.name}
              amount={new Intl.NumberFormat().format(item.amount.toFixed(2))}
              key={item.id}
              index={item.id}
            />
          ) : (
            <ExpenseTransaction
              name={item.name}
              amount={new Intl.NumberFormat().format(item.amount.toFixed(2))}
              key={item.id}
              index={item.id}
            />
          )
        )}
      </div>
    </div>
  );
}

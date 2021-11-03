import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function Balance() {
  const [state] = useContext(GlobalContext);
  const { transactions } = state;

  const totalIncome = transactions
    .slice()
    .filter((item) => item.type === "income")
    .reduce((acc, val) => acc + val.amount, 0)
    .toFixed(2);

  const totalExpenses = transactions
    .slice()
    .filter((item) => item.type === "expense")
    .reduce((acc, val) => acc + val.amount, 0)
    .toFixed(2);

  const balance = (totalIncome - totalExpenses).toFixed(2);

  return (
    <div>
      <div className="your-balance">
        <p>Your Balance</p>
        <p style={{ fontSize: "x-large" }}>
          INR: {new Intl.NumberFormat().format(balance)}
        </p>
      </div>
      <div className="summary-card">
        <div className="card-income">
          <p>Income</p>
          <p style={{ fontSize: "x-large", color: "#2ecc71" }}>
            INR: {new Intl.NumberFormat().format(totalIncome)}
          </p>
        </div>
        <p className="divider">&nbsp;</p>
        <div className="card-expenses">
          <p>Expenses</p>
          <p style={{ fontSize: "x-large", color: "#e74c3c" }}>
            INR: {new Intl.NumberFormat().format(totalExpenses)}
          </p>
        </div>
      </div>
    </div>
  );
}

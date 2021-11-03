import React from "react";
import AddTransaction from "./AddTransaction";
import Balance from "./Balance";
import History from "./History";
import { AddIncome, AddExpense } from "./Transaction";
import { GlobalProvider } from "../context/GlobalState";

import Title from "./Title";

export default function App() {
  return (
    <GlobalProvider>
      <div className="app">
        <Title />
        <Balance />
        <History />
        <AddTransaction />
      </div>
      <AddIncome />
      <AddExpense />
    </GlobalProvider>
  );
}

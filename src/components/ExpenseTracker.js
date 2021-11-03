import React, { useContext, useState } from "react";
import { TransactionsContext } from "../global/contextApi/TransactionsContext";

export default function ExpenseTracker() {
  const date = Date();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [tracking, setTracking] = useState("");
  const { Transactions, AddUsers } = useContext(TransactionsContext);
  console.log(Transactions);

  const handleSubmit = (event) => {
    event.preventDefault();
    AddUsers({
      description,
      amount,
      tracking,
    });
  };

  const getIncome = () => {
    let totalIncome = 0;
    for (let i = 0; i < Transactions.length; i++) {
      const element = Transactions[i];
      if (element.tracking === "income") {
        totalIncome += Number(element.amount);
      }
    }
    return totalIncome;
  };

  const getExpense = () => {
    let totalExpense = 0;
    for (let i = 0; i < Transactions.length; i++) {
      const element = Transactions[i];
      if (element.tracking === "expense") {
        totalExpense += Number(element.amount);
      }
    }
    return totalExpense;
  };

  return (
    <div className="container shadow">
      <h2 className="text-center">Expense Tracker App</h2>
      <h4 className=" pad-15px text-color">
        Your Balance <br />
        <span className="font-size-30px darkcyan">
          ${getIncome() - getExpense()}
        </span>
      </h4>
      <p className="text-color text-center font-size-12px">{date}</p>
      <div className="flex space-around bg-white shadow">
        <h5 className="text-color">
          Income <br />
          <span className="font-size-20px darkgreen">${getIncome()}</span>
        </h5>
        <h5 className="text-color">
          Expense <br />
          <span className="font-size-20px darkred">${getExpense()}</span>
        </h5>
      </div>
      <h4 className="pad-bottom-7px hr text-color">Add new description</h4>
      <form onSubmit={handleSubmit} action="">
        <label className="text-color">Enter description or Text</label>
        <br />
        <input
          className="width-100 pad-7px border-none bg-darkgray out-line-darkcyan darkcyan"
          type="text"
          required
          onChange={(ev) => setDescription(ev.target.value)}
        />
        <br />
        <label className="text-color ">Enter amount</label>
        <br />
        <input
          className="width-100 pad-7px border-none bg-darkgray out-line-darkcyan darkcyan "
          type="number"
          required
          onChange={(ev) => setAmount(ev.target.value)}
        />
        <div className="flex space-around pad-15px">
          <div>
            <input
              type="radio"
              className="curser-pointer"
              id="Income"
              value="income"
              name="tracking"
              required
              onClick={(ev) => setTracking(ev.target.value)}
            />
            <label htmlFor="Income" className="darkgreen">
              Income
            </label>
          </div>
          <div>
            <input
              type="radio"
              className="curser-pointer"
              id="Expense"
              value="expense"
              name="tracking"
              required
              onClick={(ev) => setTracking(ev.target.value)}
            />
            <label htmlFor="" className="darkred">
              Expense
            </label>
          </div>
        </div>
        <input
          className="pad-7px width-100 shadow bg-darkblue color-white curser-pointer border-none outline-none"
          type="submit"
          value="Add Transaction"
        />
      </form>
      <h4 className="pad-bottom-7px hr text-color">History</h4>
      <ul className="list-style-none">
        {Transactions.map((trans, ind) => {
          return (
            <li
              key={ind}
              className={` flex space-between pad-7px shadow bg-white margin-bottom-10px ${
                trans.tracking === "income" ? "income-border" : "expense-border"
              } `}
            >
              <span>{trans.description}</span>
              <span>${trans.amount}</span>
            </li>
          );
        })}
      </ul>
      <p className="text-center text-color">End</p>
    </div>
  );
}

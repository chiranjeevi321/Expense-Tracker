import { createContext, useReducer } from "react";
import TransReducer from "../reducer/TransactionsReducer";

const Trans = [{ description: "Cash", amount: 789 }];

export const TransactionsContext = createContext(Trans);

function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(TransReducer, []);

  function AddUsers({ description, amount, tracking }) {
    dispatch({
      type: "ADD_TRANSACTIONS",
      payload: {
        description,
        amount,
        tracking,
      },
    });
  }
  return (
    <TransactionsContext.Provider
      value={{
        Transactions: state,
        AddUsers,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

export default ContextProvider;

import "./App.css";
import ExpenseTracker from "./components/ExpenseTracker";
import ContextProvider from "./global/contextApi/TransactionsContext";

function App() {
  return (
    <ContextProvider>
      <ExpenseTracker />
    </ContextProvider>
  );
}

export default App;

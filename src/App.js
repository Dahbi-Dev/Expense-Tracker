import { useState } from "react";
import Balance from "./components/Balance";
import InExList from "./components/InExList";
import Transaction from "./components/Transaction";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      label: "phone",
      amount: "500",
    },
    {
      id: 2,
      label: "rent",
      amount: "400",
    },
  ]);
  const [incomes, setIncomes] = useState([
    {
      id: 1,
      label: "salary",
      amount: "2000",
    },
  ]);


  const addIncomes = (income)=> {
    setIncomes([income,...incomes])
    
  }
  const addExpenses = (expense)=> {
    setExpenses([expense,...expenses])

  }
  return (
    <div className="container">
      <div className="row my-4">
        <div className="col-md-8 mx-auto">
          <div className="card">
            <div className="card-body">
              <Balance balances="3000" />
              <Transaction addIncomes={addIncomes} addExpenses={addExpenses} />
              <InExList incomes={incomes} expenses={expenses}  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

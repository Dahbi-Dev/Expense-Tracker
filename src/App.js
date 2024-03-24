import { useEffect, useState } from "react";
import Balance from "./components/Balance";
import InExList from "./components/InExList";
import Transaction from "./components/Transaction";

function App() {
  const [balance , setBalance] = useState(0)

  const [expenses, setExpenses] = useState([
    {
      id: 1,
      label: "phone",
      amount: "500",
    }
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

  const removeIncome = (id)=>{
    const updatedIncome = incomes.filter(income=> income.id !== id);
    setIncomes(updatedIncome);
  }
  const removeExpense = (id)=>{
    const updatedExpense = expenses.filter(expense=> expense.id !== id);
    setExpenses(updatedExpense);
  }

useEffect(()=>{
  calcBalance();
})
  const calcBalance = () => {
    const totalIncArray = incomes.map(income=> income.amount);
    const totalExpArray = expenses.map(expense=> expense.amount);
   const totlaInc = totalIncArray.reduce((amount,item)=> parseInt(amount) + parseInt(item),0)
   const totlaExp = totalExpArray.reduce((amount,item)=> parseInt(amount) + parseInt(item),0)
   setBalance( parseInt(totlaInc) - parseInt(totlaExp) );
  }


  return (
    <div className="container">
      <div className="row my-4">
        <div className="col-md-8 mx-auto">
          <div className="card">
            <div className="card-body">

              <Balance 
              balance={balance}
              />

              <Transaction 
              addIncomes={addIncomes} 
              addExpenses={addExpenses} 
              />

              <InExList 
              incomes={incomes} 
              expenses={expenses} 
              removeIncome={removeIncome} 
              removeExpense={removeExpense}  
               />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

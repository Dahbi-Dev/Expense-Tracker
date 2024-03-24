import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Transaction({ addIncomes, addExpenses }) {
  const [label, setLabel] = useState("");
  const [amount, setAmount] = useState("");

  const addInc = (income) => {
    addIncomes(income);

    setTimeout(() => {
      setLabel("");
      setAmount("");
    }, 500);
  };
  const addExp = (expense) => {
    addExpenses(expense);
    // console.log(expense);

    setTimeout(() => {
      setLabel("");
      setAmount("");
    }, 500);
  };
  return (
    <div className="row">
      <div className="col-md-6 mx-auto">
        <div action="" className="row g-3 my-3">
          <div className="col-auto">
            <button
              disabled={!label || !amount}
              className="btn btn-sm btn-success mb-3"
              onClick={() => addInc({ id: uuidv4(), label, amount })}
            >
              <i className="bi bi-plus-circle-fill"> Income</i>
            </button>
          </div>
          <div className="col-auto">
            <input
              type="text"
              className="form-control mb-2"
              value={label}
              onChange={(event) => setLabel(event.target.value)}
              placeholder="Label ..."
            />
            <input
              type="number"
              className="form-control mb-2"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
              placeholder="Amount"
            />
          </div>
          <div className="col-auto">
            <button
              disabled={!label || !amount}
              className="btn btn-sm btn-danger mb-3"
              onClick={() => addExp({ id: uuidv4(), label, amount })}
            >
              <i className="bi bi-x-circle-fill"> Expense</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

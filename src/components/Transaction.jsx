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

    setTimeout(() => {
      setLabel("");
      setAmount("");
    }, 500);
  };
  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div action="" className="row g-3 my-3">
          <div className="col-auto text-center">
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
          <div className="col-auto d-flex justify-content-center">
            <button
              disabled={!label || !amount}
              className="btn btn-sm btn-success me-2"
              onClick={() => addInc({ id: uuidv4(), label, amount })}
            >
              <i className="bi bi-plus-circle-fill"></i> Income
            </button>
            <button
              disabled={!label || !amount}
              className="btn btn-sm btn-danger"
              onClick={() => addExp({ id: uuidv4(), label, amount })}
            >
              <i className="bi bi-x-circle-fill"></i> Expense
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

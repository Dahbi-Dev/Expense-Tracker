import React from "react";

export default function ({ incomes, expenses, removeIncome, removeExpense }) {
  return (
    <div className="row my-3">
      <div className="col-md-10 mx-auto">
        <div className="row d-flex justify-content-center">
          <div className="col-md-5">
            <h4 className="mb-3">Incomes</h4>
            <ul className="list-group">
              {incomes.map((incomes) => (
                <li key={incomes.id} className="list-group-item list-group-item-action">
                  <div className="d-flex w-100 justify-content-between">
                    <h6 className="mb-1">{incomes.label} &rarr;  <span className="text-success">{incomes.amount} DH</span></h6>
                    <span className="text-danger"
                    onClick={()=> removeIncome(incomes.id)}>
                      <i className="bi bi-x-circle-fill"></i>
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-5">
            <h4 className="mb-3">Expenses</h4>
            <ul className="list-group">
             {
                expenses.map(expenses => (
                    <li key={expenses.id} className="list-group-item list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                      <h6 className="mb-1">{expenses.label} &rarr; <span className="text-danger">{expenses.amount} DH</span></h6>
                      <span className="text-danger"
                      onClick={()=> removeExpense(expenses.id)}>
                        <i className="bi bi-x-circle-fill"></i>
                      </span>
                    </div>
                  </li>
                ))
             }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

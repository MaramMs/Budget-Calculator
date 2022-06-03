import React, { useState } from "react";
import "./App.css";
import { ExpenseForm } from "./components/ExpenseForm";
import { ExpenseList } from "./components/ExpenseList";

import { Alert } from "./components/Alert";
import { v4 as uuid } from "uuid";

const initialExpenses = [
  { id: uuid(), charge: "rent", amount: 1600 },
  { id: uuid(), charge: "car", amount: 1400 },
  { id: uuid(), charge: "payment", amount: 2000 },
  { id: uuid(), charge: "credit", amount: 1500 },
];
function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState("");

  const handleCharge = (e) => {
    setCharge(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };
  
  const handelSubmit = e => {
  e.preventDefault()
  if(charge !== '' && amount > 0){
    const expense = {id:uuid(), charge,amount};
    console.log(expense);
    setExpenses([...expenses,expense]);
    setCharge('');
    setAmount('');
  }1
  }

  return (
    <>
      <Alert />
      <h1>Budget Calculator </h1>
      <main>
        <ExpenseForm
          handleCharge={handleCharge}
          handleAmount={handleAmount}
          handelSubmit={handelSubmit}
          charge={charge}
          amount={amount}
        />
        <ExpenseList expenses={expenses} />
      </main>

      <h1>
        Total spending :
        <span>
          $
          {expenses.reduce((acc, curr) => {
            return (acc += parseInt(curr.amount));
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;

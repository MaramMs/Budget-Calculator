import React from "react";
import { ExpenseItem } from "./ExpenseItem";
 import { MdDelete }from 'react-icons/md';

export const ExpenseList = ({ expenses }) => {
  return (
    <>
      <ul>
        {expenses.map((expense) =>  {
          return <ExpenseItem key={expense.id} expense={expense} />;
        })}
      </ul>
      {
        expenses.length > 0 && <button> Clear Expenses <MdDelete /> </button>
      }
    </>
  );
};

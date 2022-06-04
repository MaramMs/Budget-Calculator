import React from "react";
import { ExpenseItem } from "./ExpenseItem";
 import { MdDelete }from 'react-icons/md';

export const ExpenseList = ({ expenses,  clearItems, handleDeleted, handleEdited }) => {
  return (
    <>
      <ul className="list">
        {expenses.map((expense) =>  {
          return <ExpenseItem key={expense.id} expense={expense} handleDeleted={handleDeleted} handleEdited={handleEdited}/>;
        })}
      </ul>
      {
        expenses.length > 0 && <button  className='btn'onClick={clearItems}> Clear Expenses <MdDelete className="btn-icon"/> </button>
      }
    </>
  );
};

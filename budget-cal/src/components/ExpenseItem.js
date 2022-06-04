import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";

export const ExpenseItem = ({ expense, handleDeleted,handleEdited }) => {
  const { id, charge, amount } = expense;
  return (
    <li className="item">
      <div className="info">
        <span className="expense">{charge}</span>
        <span className="amount">{amount}</span>
      </div>
      <div>
        <button onClick={()=>handleEdited(id)} className='edit-btn'>
          <MdEdit />
        </button>
        <button onClick={() =>handleDeleted(id)} className='clear-btn'>
          <MdDelete />
        </button>
      </div>
    </li>
  );
};

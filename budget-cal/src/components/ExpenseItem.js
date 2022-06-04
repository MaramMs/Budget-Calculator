import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";

export const ExpenseItem = ({ expense, handleDeleted,handleEdited }) => {
  const { id, charge, amount } = expense;
  return (
    <li className="item">
      <div className="info">
        <span>{charge}</span>
        <span>{amount}</span>
      </div>
      <div>
        <button onClick={()=>handleEdited(id)}>
          <MdEdit />
        </button>
        <button onClick={() =>handleDeleted(id)}>
          <MdDelete />
        </button>
      </div>
    </li>
  );
};

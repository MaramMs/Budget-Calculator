import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";

export const ExpenseItem = ({ expense }) => {
  const { id, charge, amount } = expense;
  return (
    <li className="item">
      <div className="info">
        <span>{charge}</span>
        <span>{amount}</span>
      </div>
      <div>
        <button>
          <MdEdit />
        </button>
        <button>
          <MdDelete />
        </button>
      </div>
    </li>
  );
};

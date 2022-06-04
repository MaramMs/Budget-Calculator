import React from "react";
import { MdSend } from "react-icons/md";

export const ExpenseForm = ({ amount, charge, handleCharge, handleAmount,handelSubmit }) => {
  return (
    <form onSubmit={handelSubmit}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="charge">Charge</label>
          <input
            type="text"
            name="charge"
            id="charge"
            className=" form-control"
            placeholder="e.g rent"
            value={charge}
            onChange={handleCharge}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            name="amount"
            id="amount"
            className="form-control"
            placeholder="e.g 100"
            onChange={handleAmount}
            value={amount}
          />
        </div>
      </div>
      <button type="submit" className="btn">
        Submit
        <MdSend className="btn-icon" />
      </button>
    </form>
  );
};

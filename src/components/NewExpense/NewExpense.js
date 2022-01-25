import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import Card from "../Card";
const NewExpense=(props)=>{
 
  const [edittingState,setEdittingState]=useState(false);
            
  const startEditHandler=()=>
 {
   setEdittingState(true);
 }
 
 const endEditHandler=()=>
 {
   setEdittingState(false);
 }
    const saveExpenseDataHandler=(enteredExpenseData)=>{
      props.onNewExpense(enteredExpenseData);
      setEdittingState(false);
    }

    return(
        <div className="new-expense">
   {!edittingState && <button onClick={startEditHandler}>Add New Expense</button>}      
   {edittingState && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelEdit={endEditHandler} />}
           
        </div>
    );
}

export default NewExpense;
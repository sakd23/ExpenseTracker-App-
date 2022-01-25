import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList=(props)=>{

    

  if(props.items.length===0)
  {
      return(
          <h2 className="expenses-list__fallback">No Expense Found</h2>
      )
  }

  
      return(
       <ul className="expense-list">
        {
           
       props.items.map((item) => (
         <ExpenseItem
          
           title={item.title}
           amount={item.amount}
           date={item.date}
         />
       ))
     
        } 
        </ul>
      )
    
  

}

export default ExpenseList;
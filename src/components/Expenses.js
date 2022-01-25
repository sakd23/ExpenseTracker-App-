import React, { useState } from "react";
import "./Expenses.css";
import Card from "./Card";
import ExpensesFilter from "../UI/ExpensesFilter";
// import ExpenseItem from "./ExpenseItem";
import ExpenseList from "./ExpenseList";


function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2022");

 
  const currYearDisplay = (currYear) => {
    setSelectedYear(currYear);
    
  };

let dynamicExpenseList=props.items.filter(item=>item.date.getFullYear().toString()===selectedYear);  
  
  return (

    

    <div>
      <Card className="expenses">
        <ExpensesFilter
          onYearChange={currYearDisplay}
          currYear={selectedYear}
        />

<ExpenseList items={dynamicExpenseList}  />
   
    
   </Card>
    </div>
  )
}

export default Expenses;

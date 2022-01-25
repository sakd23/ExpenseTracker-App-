import React, {useState} from "react"; 
import Expenses  from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
// array containing info about expenses
const expensesList = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [dynamicExpenseList,setDynamicExpenseList]=useState(expensesList);

const newExpenseDataHandler=(newExpenseData)=>{
  console.log(newExpenseData);
   setDynamicExpenseList((currExpenseList)=>{
     return [newExpenseData, ...currExpenseList]
     
   })
}  



  return (
    <div>
 
      <NewExpense  onNewExpense={newExpenseDataHandler}/>
      <Expenses items={dynamicExpenseList} />

    </div>
  );
}

export default App;

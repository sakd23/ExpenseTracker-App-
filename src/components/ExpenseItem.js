import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
function ExpenseItem(props){

    const hoverHandler=()=>{
        console.log("hovering");
    }

   const clickHandler=()=>{
       console.log("clicked{{{{")
   }
    return (
        <Card className="expense-item">
       
         <ExpenseDate date={props.date} />

        <div  className="expense-item__description">
            <h2 >{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        
        </div>
        
        <button onMouseEnter={hoverHandler} onClick={clickHandler}>button</button>
        </Card>
    )
}

export default ExpenseItem;

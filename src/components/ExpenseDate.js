import React from "react";
import "./ExpenseDate.css";
function ExpenseDate(props)
{
    let month=props.date.toLocaleString('default', { month: 'long' });
    let day=props.date.getDate();
    let year=props.date.getFullYear();
    return(
        <div className="DateInfoBox">
        
        <div className="month">
        {month}
        </div>
        
        <div className="year">
        {year}
        </div>

        <div className="day">
        {day}
        </div>
        
        </div>
    )
}






export default ExpenseDate;
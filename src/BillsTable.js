import React from 'react';
import './BillsTable.css';

// {} to take props
export function BillsTable({ todo, index, completeTodo, removeTodo  }) {
  return (
    <div className="bill" style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}>
        {`${(index + 1)}: ${todo.text}`}
      <div>
        <button className="button" onClick={ () => completeTodo(index)}> Paid </button>
        <button className="button" onClick={ () => removeTodo(index)}> X </button>
      </div>
    </div>
  );
}
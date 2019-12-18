import React, { useState } from 'react';

export function NewBillInputForm({ addTodo }){
  const [newTodo, setNewTodo] = useState('');

  return (
   <div>
      <form onSubmit={(e) => handleSubmit(e, newTodo, setNewTodo, addTodo)}> 
        <input type="text" 
        className="input" 
        value={newTodo} 
        placeholder="Add Bill" 
        onChange={e => setNewTodo(e.target.value)} 
        style={{textAlign:'center', width:'100%'}}/>
      </form>   
    </div>
  )
}


function handleSubmit(e, newTodo, setNewTodo, addTodo) {
  e.preventDefault();
  if(!newTodo) return;
  addTodo(newTodo);

  // clear form 
  setNewTodo('');
}
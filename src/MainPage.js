import React, { useState } from 'react';
import { NameTableHooks } from './NameTableHooks';
import NameTable from './NameTable';
import { NewBillInputForm } from './NewBillInputForm';
import { BillsTable } from './BillsTable';

// using functional components instead of classes
function MainPage() {
  // todos is a state variable, setTodos is a method to update the state 
  const [todos, setTodos] = useState([
    {
      text: 'Rent',
      isCompleted: false
    },
    {
      text: 'Car Payment',
      isCompleted: false
    },
    {
      text: 'Food',
      isCompleted: false
    }
  ]);

  // update state using method 
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="MainPage" style={{backgroundColor: 'black', height: '100%'}}>
      {/* makemakemake the styles below a theme and use useContext(themeContext)*/}
      <div className="hooksDemoTables" style={{ width: '100%', backgroundColor: 'red', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <div style={{padding: '5px 5px 5px 5px', width: '50%', float: 'left'}}>
          <NameTableHooks/>
        </div>
        <div style={{padding: '5px 5px 5px 5px', width: '50%', float: 'right'}}>
          <NameTable/> 
        </div>
      </div>
      <div className="billsTable">
          {todos.map((todo, index) => (
            // notice props are passed in exactly the same as classical component
            <BillsTable key={index} 
            index={index} 
            todo={todo} 
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            />
          ))}
          <NewBillInputForm addTodo={addTodo} />
        </div>
    </div>
  );
}

export default MainPage;

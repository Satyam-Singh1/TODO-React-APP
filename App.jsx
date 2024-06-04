import Appname from "./Components/Appname";
import Addtodo from "./Components/Addtodo";
import "./App.css";
import Todoitems from "./Components/TodoItems";
import Welcomemessage from "./Components/Welcomemessage";
import { useState } from "react";
function App() {
  const initialtodoItems = [];

  const [todoItems, setTodoItems] = useState(initialtodoItems);
  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { name: itemName, duedate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };
  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter(
      (todoItem) => todoItem.name !== todoItemName
    );
    setTodoItems(newTodoItems);
    console.log(`Delete item : ${todoItemName}`);
  };

  return (
    <div classNameName="back">
      <center classNameName="todo-container">
        <Appname></Appname>
        <container classNameName="todo">
          <Addtodo onNewItem={handleNewItem} />
          {todoItems.length === 0 && <Welcomemessage></Welcomemessage>}
          <Todoitems
            todoItems={todoItems}
            onDeleteclick={handleDeleteItem}
          ></Todoitems>
        </container>
      </center>
    </div>
  );
}
export default App;

import { useRef, useState } from "react";
import { IoAddCircle } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import styles from "./Addtodo.module.css";
function Addtodo({ onNewItem }) {
  // const [todoName, setTodoName] = useState("");
  // const [duedate, setDueDate] = useState("");
  const todoNameElemment = useRef();
  const duedateElemment = useRef();
  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  // };
  // const handleDateChange = (event) => {
  //   setDueDate(event.target.value);
  // };
  const handleAddbuttonClicked = (event) => {
    const todoName = todoNameElemment.current.value;
    const duedate = duedateElemment.current.value;
    todoNameElemment.current.value = "";
    duedateElemment.current.value = "";

    onNewItem(todoName, duedate);
  };
  return (
    <div className="container" classNameName={styles.container}>
      <form classNameName=" row kg-row" onSubmit={handleAddbuttonClicked}>
        <div className="row kg-row">
          <div className="col-6">
            <input
              type="text"
              ref={todoNameElemment}
              placeholder="Enter Todo here"
              // value={todoName}
              // onChange={handleNameChange}
            ></input>
          </div>
          <div classNameName="col-4">
            <input
              type="date"
              ref={duedateElemment}
              // value={duedate}
              // onChange={handleDateChange}
            ></input>
          </div>
          <div className="col-2">
            <button
              type="button"
              classNameName="btn btn-success kg-button"
              onClick={handleAddbuttonClicked}
            >
              <IoAddCircle />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Addtodo;

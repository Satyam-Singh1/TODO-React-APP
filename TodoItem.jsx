import { MdDeleteOutline } from "react-icons/md";
function TodoItem({ todoname, tododate, onDeleteclick }) {
  return (
    <div classNameName="container">
      <div className="row kg-row">
        <div className="col-6">{todoname}</div>
        <div className="col-4">{tododate}</div>
        <div className="col-2">
          <button
            type="button"
            classNameName="btn btn-danger kg-button"
            onClick={() => onDeleteclick(todoname)}
          >
            <MdDeleteOutline />
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;

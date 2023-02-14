import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, todoDoneAction } from "../redux/actions/TodoAction";
import store from "../redux/Store";

const TableRow = ({ id, date, text, isDone, setIsUpdate, ind }) => {
  const dispatch = useDispatch(store);

  const handleDelete = (id) => {
    const isConfirm = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (isConfirm) {
      dispatch(deleteTodo(id));
    }
  };

  const handleUpdate = ({ id, text }) => {
    setIsUpdate({ id, text });
  };

  const handleDone = (id) => {
    const isConfirm = window.confirm("Are you sure you want to mark it done?");
    if (isConfirm) {
      dispatch(todoDoneAction(id));
    }
  };
  return (
    <tr className={isDone ? "done" : ""}>
      <td>{ind + 1}</td>
      <td>{date}</td>
      <td>{text}</td>
      <td>{isDone ? "Completed" : "Pending"}</td>
      <td>
        <button
          onClick={() => handleDone(id)}
          className={`done-btn ${isDone ? "pointer-none" : ""}`}
        >
          ✔️
        </button>
      </td>
      <td>
        <button
          onClick={() => handleUpdate({ id, text })}
          className={`edit-btn ${isDone ? "pointer-none" : ""} `}
        >
          {" "}
          ✏️
        </button>
      </td>
      <td>
        <button onClick={() => handleDelete(id)} className="delete-btn">
          ❌
        </button>
      </td>
    </tr>
  );
};

export default TableRow;

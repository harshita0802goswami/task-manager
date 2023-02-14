import React from "react";
import styled from "styled-components";
import { useState } from "react";
import store from "../redux/Store";
import { addTodo, editTodo } from "../redux/actions/TodoAction";
import { useDispatch, useSelector } from "react-redux";

const TodoInput = ({ isUpdate, setIsUpdate }) => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch(store);
  const toDos = useSelector((state) => state);

  const handleTodo = () => {
    if (!todo) {
      return alert("Please enter todo");
    }
    const isExist = toDos.find((todoText) => todoText.text === todo);
    if (isExist) {
      return alert("Todo already exists");
    }
    dispatch(
      addTodo({
        id: toDos.length + 1,
        text: todo,
        date: new Date().toLocaleString(),
        isDone: false,
      })
    );
    setTodo("");
  };

  const [updateText, setUpdateText] = useState("");
  const updateTodo = () => {
    if (!updateText) return alert("Please enter a todo");

    dispatch(
      editTodo({
        id: isUpdate.id,
        text: updateText,
        date: new Date().toLocaleString(),
        isDone: false,
      })
    );
    setUpdateText("");
    setIsUpdate({});
  };

  return (
    <TodoInputStyled>
      {isUpdate.id ? (
        <div className="todoField update-mode">
          <input
            type="text"
            placeholder="Enter Todo"
            value={updateText || isUpdate.text}
            onChange={(e) => setUpdateText(e.target.value)}
          />
          <button onClick={updateTodo}>Update</button>
        </div>
      ) : (
        <div className="todoField">
          <input
            type="text"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
            placeholder="Add Todo"
          />
          <button onClick={handleTodo}>Add</button>
        </div>
      )}
    </TodoInputStyled>
  );
};

const TodoInputStyled = styled.div`
  position: relative;
  text-align: center;
  .todoField {
    position: relative;
    display: flex;
    align-items: stretch;
    justify-content: center;
    width: min(500px, 100% - 2rem);
    margin: 2rem auto;
    background: #f8f8f8;
    padding: 0.6rem;
    border-radius: 6px;
    input {
      padding: 0.8rem 1rem;
      border: 1px solid #ccc;
      font-family: "Poppins", sans-serif;
      background: none;
      border: none;
      outline: none;
      width: 100%;
      border-radius: 6px;
    }
    button {
      padding: 0rem 1rem;
      background: #7919c2;
      font-family: "Poppins", sans-serif;
      color: #fff;
      border: none;
      cursor: pointer;
      border-radius: 6px;
    }
  }
  .update-mode {
    position: relative;
    border: 1px solid #19c281;
  }
  .update-mode::after {
    content: "Update Mode";
    position: absolute;
    right: 0px;
    bottom: -28px;
    font-size: 0.8rem;
    background: #19c281;
    font-family: "Poppins", sans-serif;
    color: #fff;
    padding: 0.3rem;
    border-radius: 0px 0px 5px 5px;
  }
`;
export default TodoInput;

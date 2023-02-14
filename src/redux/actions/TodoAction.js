import {
  ADD_TODO,
  DELETE_TODO,
  TODO_DONE,
  EDIT_TODO,
} from "../constants/TodoConstant";

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const editTodo = (todo) => {
  return {
    type: EDIT_TODO,
    payload: todo,
  };
};

export const deleteTodo = (todoId) => {
  return {
    type: DELETE_TODO,
    payload: todoId,
  };
};

export const todoDoneAction = (todoId) => {
  return {
    type: TODO_DONE,
    payload: todoId,
  };
};

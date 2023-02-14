import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  TODO_DONE,
} from "../constants/TodoConstant";

const initialData = [
  {
    id: 1,
    text: "Learn React",
    isDone: true,
    date: new Date().toLocaleString(),
  },
];

const TodoReducer = (state = initialData, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case EDIT_TODO:
      const totalEdited = state.filter((todo) => todo.id !== action.payload.id);
      const updatedTodo = state.find((todo) => todo.id === action.payload.id);
      updatedTodo.text = action.payload.text;
      return [...totalEdited, updatedTodo];

    case DELETE_TODO:
      const totalDeleted = state.filter((todo) => todo.id !== action.payload);
      return totalDeleted;

    case TODO_DONE:
      const allTodo = state.filter((todo) => todo.id !== action.payload);

      const todoDone = state.find((todo) => todo.id === action.payload);
      todoDone.isDone = true;
      return [...allTodo, todoDone];

    default:
      return state;
  }
};

export default TodoReducer;

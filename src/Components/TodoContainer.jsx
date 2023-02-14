import React from "react";
import styled from "styled-components";
import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoTable from "./TodoTable";

const TodoContainer = () => {
  const [isUpdate, setIsUpdate] = useState({});

  return (
    <TodoStyled>
      <TodoInput isUpdate={isUpdate} setIsUpdate={setIsUpdate} />
      <TodoTable setIsUpdate={setIsUpdate} />
    </TodoStyled>
  );
};
const TodoStyled = styled.section`
  position: relative;
`;
export default TodoContainer;

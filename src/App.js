import styled from "styled-components";

import TodoContainer from "./Components/TodoContainer";

function App() {
  return (
    <AppContainer className="App">
      <header className="App-header">
        <div className="title">
          <h1>Create Your Todo</h1>
          <span>Make a plan to-do something today !!!</span>
        </div>
        <TodoContainer/>
      </header>
     
    </AppContainer>
  );
}
const AppContainer = styled.section`
  position: relative;
  width: 1270px;
  margin: 1rem auto;
  font-family: "Poppins", sans-serif;
  .title {
    margin: 1rem 0rem;
    text-align: center;
    h1 {
      font-size: 4rem;
    }
    span {
      font-size: 1.3rem;
      font-weight: bold;
      color: purple;
    }
    h1 {
      margin: 0px;
    }
  }
`;

export default App;

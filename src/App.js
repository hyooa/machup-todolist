import './App.css';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './Components/TodoTemplate';
import TodoHead from './Components/TodoHead';
import TodoList from './Components/TodoList';
import TodoCreate from './Components/TodoCreate';
import { TodoProvider } from './TodoContext';

// createGlobalStyle ) 글로벌 스타일을 추가하고 싶은 때
const GlobalStyle = createGlobalStyle `
  body {
    background : #e9ecef;
  }
`;

function App() {
  return (
    <TodoProvider>
      
      <GlobalStyle></GlobalStyle>

      <TodoTemplate>
        <TodoHead></TodoHead>
        <TodoList></TodoList>
        <TodoCreate></TodoCreate>
      </TodoTemplate>

    </TodoProvider>
  );
}

export default App;

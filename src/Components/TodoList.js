import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import  { useTodoState } from '../TodoContext';

const TodoListBlock = styled.div `
    padding : 20px 32px;
    overflow-y : auto;
    flex : 1;
`;
// flex : 1; 화면 100% 채워짐, 자식이 여러개면 알아서 나눠가짐

const TodoList = () => {
    const todos = useTodoState();

    return (
        <TodoListBlock>
            {todos.map(todo => (
                <TodoItem
                key={todo.id}
                id={todo.id}
                text={todo.text}
                done={todo.done}
                ></TodoItem>
            ))}

            {/* <TodoItem text="리액트 스타일 공부하기" done={true}></TodoItem>
            <TodoItem text="캔버스 게임 만들기" done={true}></TodoItem>
            <TodoItem text="리액트 state, props 공부하기" done={false}></TodoItem> */}
        </TodoListBlock>
    );
};

export default TodoList;
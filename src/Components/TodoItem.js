import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md'; // ๐ ์์ด์ฝ
// import { IconName } from "react-icons/md";
            // ใด ์์ด์ฝ ์ด๋ฆ์ ์ ์ด์ค
import { useTodoDispatch } from '../TodoContext';


// ์ฐ๋ ๊ธฐํต
const Remove = styled.div `
    display : flex;
    align-items : center;
    justify-content : center;
    color : #dee2e6;
    font-size : 14px;
    cursor : pointer;
    &:hover {
        color : #ff6b6b;
    }
    display : none;
`;

const TodoItemBlock = styled.div `
    display : flex;
    align-items : center;
    padding-top : 12px;
    padding-bottom : 12px;
    &:hover {
        ${Remove} {
            display : initial;
        }
    }
`;

const CheckCircle = styled.div `
    width : 32px;
    height : 32px;
    border-radius : 50%;
    border : 1px solid #ced4da;
    font-size : 24px;
    display : flex;
    align-items : center;
    justify-content : center;
    margin-right : 20px;
    cursor : pointer;
    ${props =>
        props.done &&
        css`
            border : 1px solid #38d9a9;
            color #38d9a9;
        `
    }
`;
// props.done ) true ๊ฐ ์๋๋ฉด css ์ ์ฉ ์๋จ

const Text = styled.div `
    flex : 1;
    font-size : 21px;
    color : #495057;
    ${props =>
        props.done &&
        css`
            color : #ced4da;
        `
    }
`;

// true, false, ์ญ์ ํ๊ธฐ
const TodoItem = ({id, done, text}) => {
    const dispatch = useTodoDispatch();
    // ํญ๋ชฉ ํด๋ฆญํ์ ๋ ์คํ
    const onToggle = () => dispatch({type:'TOGGLE', id:id});
    const onRemove = () => dispatch({type:'REMOVE', id:id});

    return (
        <div>
            <TodoItemBlock>
                                        {/* && ๋ ํ๋๊ฐ false๋ฉด ๊ฒฐ๊ณผ๊ฐ ๋์ด */}
                                        {/* MdDone ) ์ฒดํฌ๋ชจ์์ true์ผ๋ ๋ํ๋๊ธฐ */}
                <CheckCircle done={done} onClick={onToggle} >{ done && <MdDone/> }</CheckCircle>

                <Text done={done} >{text}</Text>

                <Remove onClick={onRemove} >
                    <MdDelete></MdDelete>
                </Remove>
            </TodoItemBlock>
        </div>
    );
};

export default TodoItem;
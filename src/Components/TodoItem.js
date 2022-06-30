import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md'; // 💚 아이콘
// import { IconName } from "react-icons/md";
            // ㄴ 아이콘 이름을 적어줌
import { useTodoDispatch } from '../TodoContext';


// 쓰레기통
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
// props.done ) true 가 아니면 css 적용 안됨

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

// true, false, 삭제하기
const TodoItem = ({id, done, text}) => {
    const dispatch = useTodoDispatch();
    // 항목 클릭했을 때 실행
    const onToggle = () => dispatch({type:'TOGGLE', id:id});
    const onRemove = () => dispatch({type:'REMOVE', id:id});

    return (
        <div>
            <TodoItemBlock>
                                        {/* && 는 하나가 false면 결과가 나옴 */}
                                        {/* MdDone ) 체크모양은 true일때 나타나기 */}
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
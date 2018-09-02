import styled from 'styled-components';

export const ConfirmButton = styled.button`
    outline: none;
    border: none;
    background-color: #55d4b7;
    color: white;
    padding: 1.2rem 2.4rem;
    margin-top: 4.6rem;
    font-size: 1.5rem;
    float: right;

    &:hover {
        background-color: #44c3a5;
        cursor: pointer;
    }

    a {
        color: white;
        text-decoration: none;
    }
`

export const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;

    svg {
        transition: 0.6s;

        &:hover {
            cursor: pointer;
            transform: rotate(90deg);
            transition: 0.4s;
        }
    }
`

export const AddTaskTitle = styled.div`
    color: #4b4b4b;
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
`

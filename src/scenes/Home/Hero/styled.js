/* eslint-disable */

import styled from "styled-components";

export const Herowrapper = styled.div`
    background: linear-gradient(#693db1, #635afc);
    -webkit-clip-path: circle(70.4% at 50% 1%);
    clip-path: circle(80.4% at 50% -5%);
    font-size: 2.8rem;
    font-weight: 300;
    color: white;
    font-family: "Montserrat";
    text-align: center;
    padding: 4.2rem;
`;

export const AddTaskButton = styled.button`
    display: flex;
    position: relative;
    color: white;
    background-color: #55d4b7;
    font-family: "Montserrat";
    font-size: 1.8rem;
    margin: -3.2rem auto;
    border: none;
    padding: 1.4rem 7rem;
    transition: 0.2s;

    &:hover {
        background-color: #44c3a5;
        cursor: pointer;
    }

    &:focus {
        outline: none;
    }
`;

export const AddTaskTitle = styled.div`
    color: white;

    ${props => props.isShowingNewTaskForm && `
        color: #4b4b4b;
        font-size: 1.2rem;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
    `}
`

const addTaskFormHidden = `
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #55d4b7;
    margin: -3.2rem auto;
    font-size: 1.8rem;
    padding: 1.4rem 7rem;
    width: 20rem;
    height: 3.5rem;

    &:hover {
        background-color: #44c3a5;
        cursor: pointer;
    }
`
const addTaskFormDisplayed = `
    background-color: white;
    margin: -3.2rem auto;
    width: 30rem;
    height: 17rem;
    box-shadow: 0 1.2rem 2.4rem rgba(0,0,0,0.2);
    padding: 2.4rem;
    border-radius: 0.5rem;

    input {
        border-style: none none solid none;
        border-bottom-color: #979797;
        border-bottom-width: 0.1rem;
        width: 100%;
        margin-top: 4.7rem;
        padding-bottom: 0.5rem;
        font-family: 'Montserrat';
        font-size: 1.9rem;
        font-weight: 300;
        outline: none;
    }
`

export const AddTaskFormWrapper = styled.div`
    transition: 0.5s, background-color 0s;
    z-index: 10;
    position: relative;
    ${ props => props.isShowingNewTaskForm ? addTaskFormDisplayed : addTaskFormHidden };
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

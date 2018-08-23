import styled from 'styled-components';

export const ModalWrapper = styled.div`
    background-color: white;
    margin: -3.2rem auto;
    width: 30rem;
    height: 17rem;
    box-shadow: 0 1.2rem 2.4rem rgba(0,0,0,0.2);
    padding: 2.4rem;
    border-radius: 0.5rem;
    z-index: 10;
    position: absolute;
    margin: auto;
    right: 0;
    left: 0;
    top: 10rem;

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

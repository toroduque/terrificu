import styled from 'styled-components';

export const TopBarWrapper = styled.div`
    display: flex;
    height: 5rem;
    border-bottom: solid 1px lightgray;
    justify-content: space-between;
    align-items: center;
    padding: 0 2.4rem;
    font-size: 1.4rem;
`
export const AddTaskButton = styled.button`
    border: none;
    outline: none;
    color: #635AFC;
    background: none;
    font-weight: 500;
    font-size: 1.4rem;
    cursor: pointer;
    padding: 0;

    &:hover {
        color: #8881FA;
    }
`

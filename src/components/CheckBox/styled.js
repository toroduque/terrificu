import styled from 'styled-components';

export const CheckBoxWrapper = styled.div.attrs({
    onClick: ({onClick}) => onClick
})`
    width: 1.4rem;
    height: 1.5rem;
    border: solid 1px #979797;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s;
`

export const CheckBoxBackground = styled.div`
    background-color: #ECEBFB;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    display: flex;
`

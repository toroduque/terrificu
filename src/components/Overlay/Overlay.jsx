import React from 'react';
import styled from 'styled-components';

const OverlayWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0,0,0,0.2);
    z-index: 9;
`

const Overlay = ({onClick}) => (
    <OverlayWrapper onClick={onClick} />
)

export default Overlay

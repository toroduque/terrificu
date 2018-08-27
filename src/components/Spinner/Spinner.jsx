import React from 'react';
import MDSpinner from "react-md-spinner";
import * as styled from './styled'

const Spinner = () => (
    <styled.SpinnerWrapper>
        <MDSpinner singleColor="#635AFC" size={100}/>
    </styled.SpinnerWrapper>
);

export default Spinner;

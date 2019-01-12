import React from 'react'
import { UserContext } from "services/contexts";
import * as styled from './styled'

const SessionInfo = () => (
    <UserContext.Consumer>
        { user => 
            <styled.SessionInfoWrapper>
                <p>Welcome, {user.user.name}</p>
                {console.log(user.user.img)}
                <img style={{width: '40px', height: '40px', borderRadius: '10px'}} src={user.user.img} alt={`${user.user.name} Profile`}/>
            </styled.SessionInfoWrapper>
        }
    </UserContext.Consumer>
)

export default SessionInfo
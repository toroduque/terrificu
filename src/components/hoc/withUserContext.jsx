import React from "react";
import { UserContext } from "services/contexts";

const withUserContext = Component => props => (
    <UserContext.Consumer>
        {({ user }) => <Component {...props} user={user} />}
    </UserContext.Consumer>
);

export default withUserContext

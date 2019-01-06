import React from "react";
import { UserContext } from "services/contexts";

const withUserContext = Component => (props, ref = undefined ) => (
    <UserContext.Consumer>
        {({ user }) => <Component {...props} user={user} ref={ref} />}
    </UserContext.Consumer>
);

export default withUserContext

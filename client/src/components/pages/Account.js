import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';


function Account() {
    const { user } = useAuth0();

    return (
        <>
            <h1 className="d-flex justify-content-center p-4">Hello, {user.given_name}!</h1>
        </>
    )
}

export default Account;
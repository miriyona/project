import React, { useState } from 'react';

export default function LoginOrRegister() {

    const [showLogin, setShowLogin] = useState(false);
    return (
        <div>
            <div><a onClick={() => { setShowLogin(!showLogin) }}>{showLogin?'הרשם':'התחבר'}</a></div>
            {!showLogin ? <div>register</div> : false}
            {showLogin ? <div>Login</div> : false}
        </div>);
}





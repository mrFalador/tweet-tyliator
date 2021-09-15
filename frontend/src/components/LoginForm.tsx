import React, { FC, useState } from 'react';

const LoginForm: FC = () => {
    const [name, setName] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    return (
        <div>
            <input
                onChange = {e => setName(e.target.value)}
                value = {name}
                type="text" 
                placeholder="Name"
            />
            <input
                onChange = {e => setPassword(e.target.value)}
                value = {password}
                type="text" 
                placeholder="Password"
            />
            <button>Login</button>
            <button>Registration</button>
        </div>
    );
};

export default LoginForm;
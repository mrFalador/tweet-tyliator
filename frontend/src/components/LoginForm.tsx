import { observer } from 'mobx-react-lite';
import React, { FC, useContext, useState } from 'react';
import { Context } from '..';

const LoginForm: FC = () => {
    const [name, setName] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const {store} = useContext(Context)

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
            <button onClick={() => store.login(name, password)}>Login</button>
            <button onClick={() => store.registration(name, password)}>Registration</button>
        </div>
    );
};

export default observer(LoginForm);
import { observer } from 'mobx-react-lite';
import React, { FC, useContext, useState } from 'react';
import { Context } from '..';

const LoginForm: FC = () => {
    const [value, setValue] = useState<string>('')
    const {store} = useContext(Context)

    return (
        <div>
            <input
                onChange = {e => setValue(e.target.value)}
                value = {value}
                type="text" 
                placeholder="Value"
            />
            <button onClick={() => store.addmessage(value, 'plus', '1', '0')}>Submit</button>
        </div>
    );
};

export default observer(LoginForm);
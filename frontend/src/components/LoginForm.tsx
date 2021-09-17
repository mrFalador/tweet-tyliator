import { observer } from "mobx-react-lite";
import React, { FC, useContext, useState } from "react";
import { Button, Input } from "@material-ui/core";
import { Context } from "..";

const LoginForm: FC = () => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { store } = useContext(Context);

  return (
    <div>
      <Input
        onChange={(e) => setName(e.target.value)}
        value={name}
        type="text"
        placeholder="Name"
      />
      <Input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="text"
        placeholder="Password"
      />
      <Button onClick={() => store.login(name, password)}>Login</Button>
      <Button onClick={() => store.registration(name, password)}>
        Registration
      </Button>
    </div>
  );
};

export default observer(LoginForm);

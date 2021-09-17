import { observer } from "mobx-react-lite";
import React, { FC, useContext, useState } from "react";
import { Button, Input } from "@material-ui/core";
import { Context } from "..";

const LoginForm: FC = () => {
  const [value, setValue] = useState<string>("");
  const { store } = useContext(Context);

  return (
    <div>
      <Input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        type="text"
        placeholder="Value"
      />
      <Button
        onClick={() => {
          store.addmessage(
            value,
            "plus",
            localStorage.getItem("userId") || "1",
            "0"
          );
          store.setNodeMess(true);
        }}
      >
        Submit
      </Button>
    </div>
  );
};

export default observer(LoginForm);

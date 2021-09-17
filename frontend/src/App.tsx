import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import AddForm from "./components/AddForm";
import LoginForm from "./components/LoginForm";
import TreeForm from "./components/TreeForm";

const App: FC = () => {
  return (
    <div>
      <LoginForm />
      <AddForm />
      <TreeForm />
    </div>
  );
};

export default observer(App);

import React, { FC, useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import MessageService from "../services/MessageService";
import { RenderTree } from "../models/RenderTree";
import { observer } from "mobx-react-lite";
import { Button, Input } from "@material-ui/core";
import { Context } from "..";



const TreeForm: FC = () => {
  const [data, setData] = useState<RenderTree>();
  const[value, setValue] = useState<string>('');
  const[operation, setOperation] = useState<string>('')
  const {store} = useContext(Context)

  async function getMessage() {
    const response = await MessageService.getMessages();
    setData(response.data);
    console.log(data);
  }

  const useStyles = makeStyles({
    root: {
      height: 110,
      flexGrow: 1,
      maxWidth: 400,
    },
  });

  const classes = useStyles();

  function changeOperation(str: string){
    switch(str){
        case '+': 
            setOperation('plus');
            break;
        case '-':
            setOperation('minus');
            break;
        case '*':
            setOperation('multiplication');
            break;
        case '/':
            setOperation('division');
            break
    }
  }

  async function getAnswer(id: string, name: string){
      let result : number;
      switch (operation) {
        case 'plus':
          result = Number(name) + Number(value);
          break;
        case 'minus':
          result = Number(name) - Number(value);
          break;
        case 'multiplication':
          result = Number(name) * Number(value);
          break;
        case 'division':
          result = Number(name) / Number(value);
          break;       
      }

      store.addmessage( '10', operation, '1', String(id))
  }

  const renderTree = (nodes: RenderTree) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
        <div>
            <Input
                onChange = {e => setValue(e.target.value)}
                value = {value}
                type="text" 
                placeholder="Value"
            />
            <Input
                onChange = {e => changeOperation(e.target.value)}
                value = {operation}
                type="text"                 
            />
            <Button onClick ={() => getAnswer(nodes.id, nodes.name)}>Answer</Button>
        </div>
    </TreeItem>
  );

  useEffect(() => {getMessage()}, [])

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpanded={["root"]}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {renderTree(data || { id: "root", name: "Parent" })}
    </TreeView>
  );
};

export default observer(TreeForm);

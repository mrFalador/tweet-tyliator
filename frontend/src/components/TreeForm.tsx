import React, { FC, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import MessageService from "../services/MessageService";
import { RenderTree } from "../models/RenderTree";
import { observer } from "mobx-react-lite";

const TreeForm: FC = () => {
  const [data, setData] = useState<RenderTree>();

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

  const renderTree = (nodes: RenderTree) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
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

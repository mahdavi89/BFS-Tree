import React, { useEffect, useState } from "react";
// import "./BFS.css";
import Node from "../Node/Node";

function BFSTree() {
  const [input, setInput] = useState("");
  const [tree, setTree] = useState(null);

  useEffect(() => {
    if (!!tree) {
      document.querySelectorAll("p").forEach((item) => {
        if (!!item) {
          const width = item.clientWidth;
          item.style.height = `${width}px`;
        }
      });
    }
  }, [tree]);

  function buildTree(nodes) {
    if (!nodes.length) {
      setTree(null);
      return;
    }
    const root = { value: nodes[0], left: null, right: null };
    const queue = [root];
    let i = 1;

    while (queue.length && i < nodes.length) {
      const node = queue.shift();

      if (nodes[i]) {
        const left = { value: nodes[i], left: null, right: null };
        node.left = left;
        queue.push(left);
      }

      i++;

      if (i < nodes.length && nodes[i]) {
        const right = { value: nodes[i], left: null, right: null };
        node.right = right;
        queue.push(right);
      }

      i++;
    }
    setTree(root);
  }

  function handleChange(event) {
    const value = event.target.value;
    setInput(value);

    const nodes = value.split(/\s+/);
    buildTree(nodes);
  }

  return (
    <div className="bst">
      <p className="title">
        To display the BFS tree, please enter the desired text with a space
      </p>
      <p className="titleNote">
        Note: For a better display, please enter a text containing at least 2
        spaces
      </p>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Enter values"
      />
      <div className="tree">{tree ? <Node inputs={tree} /> : null}</div>
    </div>
  );
}

export default BFSTree;

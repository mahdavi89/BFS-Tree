import React from "react";

const Node = ({ inputs }) => {
  const { left, right, value } = inputs;

  return (
    <div className="parent">
      <div className="root">
        {left?.value && <span className="firstChild-line"></span>}
        <p className="label">{value}</p>
        {right?.value && <span className="rightChild-line"></span>}
      </div>

      <div className="children">
        {left ? <Node inputs={left} /> : null}
        {right ? <Node inputs={right} /> : null}
      </div>
    </div>
  );
};

export default Node;

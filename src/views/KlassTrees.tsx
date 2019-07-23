import React from "react";

import "./KlassTrees.css";

interface Props {
  klass: string;
}

export const KlassTrees: React.FC<Props> = ({ klass, children }) => {
  return (
    <div className="KlassTrees">
      <h1>{klass} talents</h1>
      <div className="KlassTrees-list">{children}</div>
    </div>
  );
};

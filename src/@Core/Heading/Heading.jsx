import React from "react";
import './Heading.css'

function Heading({ title = "Heading", subTitle = "" }) {
  return (
    <div className="heading_group">
      <h1 className="heading__title">{title}</h1>
      <p className="heading__sub-title">
        {subTitle}
      </p>
    </div>
  );
}

export default Heading;

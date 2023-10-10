import React from "react";

function IconBox({ icon, heading, content, color, contentColor }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "10px",
        alignItems: "flex-start",
      }}>
      <div>
        <img
          src={icon}
          alt=""
          style={{ width: "30px", height: "30px", cursor: "pointer" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "flex-start",
        }}>
        <div style={{ color: color ? color : "#1E0E62", fontWeight: "600" }}>
          {heading}
        </div>
        <div
          style={{
            color: contentColor ? contentColor : "#9E9EAD",
            fontWeight: "400",
            fontSize: "12px",
          }}>
          {content}
        </div>
      </div>
    </div>
  );
}

export default IconBox;

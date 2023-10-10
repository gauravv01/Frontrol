import React, { useState, useEffect } from "react";

function Button({
  width,
  text,
  fontSize,
  color,
  border,
  backgroundColor,
  fontWeight,
  position,
  bottom,
  right,
  padding,
  left,
  top,
  className,
}) {
  const [isActive, setIsActive] = useState(false);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => setIsActive(false), []);
  return (
    <div
      style={{
        backgroundColor: backgroundColor
          ? backgroundColor
          : isActive
          ? "#D61F66"
          : isHover
          ? "#FF64A0"
          : "#E93A7D",
        borderRadius: "20px",
        width: width,
        color: color ? color : "white",
        textAlign: "center",
        padding: padding ? padding : "10px",
        cursor: "pointer",
        fontSize: fontSize ? fontSize : "inherit",
        border: border ? border : "0",
        fontWeight: fontWeight && fontWeight,
        position: position && position,
        bottom: bottom && bottom,
        right: right && right,
        left: left && left,
        top: top && top,
      }}
      className={className && className}
      onClick={() => setIsActive(true)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}>
      {text}
    </div>
  );
}

export default Button;

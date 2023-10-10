import React, { useState, useEffect } from "react";
import { keyframes } from "styled-components";

const fallAnimation = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(100vh);
  }
`;

const Tag = ({ top, left, text }) => {
  const [position, setPosition] = useState({ top, left });

  useEffect(() => {
    const fallInterval = setInterval(() => {
      setPosition((prevPosition) => ({
        top: prevPosition.top + 5,
        left: prevPosition.left,
      }));
    }, 50);

    return () => {
      clearInterval(fallInterval);
    };
  }, []);

  return (
    <div
      style={{
        top: position.top,
        left: position.left,
        position: "absolute",
        fontSize: "16px",
        backgroundColor: "#ffcc00",
        color: "#333",
        padding: "5px 10px",
        borderRadius: "5px",
        animation: `${fallAnimation} linear infinite`,
      }}>
      {text}
    </div>
  );
};

export default Tag;

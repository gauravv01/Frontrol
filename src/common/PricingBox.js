import React, { useState } from "react";
import greenTick from "../Utils/icons/greenTick.jpg";
import { pricingUtil } from "../Utils/constants";
import Button from "./Button";
// import "./index.css";

function FeatureLine({ line }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "5px",
      }}>
      <img src={greenTick} alt="" style={{ width: "20px", height: "15px" }} />
      <div style={{ color: "#9E9EAD", fontSize: "12px" }}>{line}</div>
    </div>
  );
}

function PricingBox({ heading, price, peruser, content, perMonth }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "center",
      }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}>
      <div
        style={{
          border: "1px solid #9E9EAD",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          alignItems: "center",
          color: isHovered ? "white" : "#1E0E62",
          padding: "30px 50px",
          backgroundColor: isHovered ? "#2F1893" : "white",
        }}>
        <div style={{ fontWeight: "500" }}>{heading}</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
            position: "relative",
          }}>
          <div
            style={{
              width: "5px",
              height: "5px",
              position: "absolute",
              left: "-15px",
              top: "-3px",
            }}>
            $
          </div>
          <div style={{ fontSize: "36px", fontWeight: "600" }}>{price}</div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "12px",
            }}>
            <div>{peruser}</div>
            <div>{perMonth}</div>
          </div>
        </div>
        <div
          style={{
            color: isHovered ? "white" : "#9E9EAD",
            fontSize: "12px",
            textAlign: "center",
          }}>
          {content}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "10px",
        }}>
        {pricingUtil.box.features.map((line, index) => (
          <FeatureLine key={index} line={line} />
        ))}
      </div>

      <Button
        text={pricingUtil.box.button}
        backgroundColor={isHovered ? "#E93A7D" : "white"}
        border={!isHovered && "1px solid #9E9EAD"}
        width={"8rem"}
        color={isHovered ? "white" : "#1E0E62"}
        fontSize={"12px"}
        fontWeight={"600"}
      />
    </div>
  );
}

export default PricingBox;

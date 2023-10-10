import React from "react";

import { learnMoreUtil } from "./Utils/constants";
import IconBox from "./common/IconBox";
import Button from "./common/Button";

function LearnMore() {
  return (
    <div
      style={{
        backgroundColor: "#2F1893",
        display: "flex",
        justifyContent: "center",
      }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "100px",

          color: "white",
          padding: "80px",
          width: "50%",
        }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            alignItems: "flex-start",
          }}>
          <div
            style={{ fontSize: "32px", fontWeight: "600", lineHeight: "32px" }}>
            {learnMoreUtil.heading}
          </div>
          <div style={{ fontWeight: "500" }}>{learnMoreUtil.content}</div>
          <Button
            width={"6rem"}
            fontSize={"13px"}
            text={learnMoreUtil.button}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "30px",
          }}>
          {learnMoreUtil.options.map((box, index) => (
            <IconBox
              key={index}
              icon={box.icon}
              heading={box.heading}
              content={box.content}
              color={"white"}
              contentColor={"white"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LearnMore;

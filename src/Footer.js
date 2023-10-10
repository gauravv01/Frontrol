import React from "react";
import { footerUtil } from "./Utils/constants";

function Feature({ heading, options }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "20px",
        color: "#1E0E62",
      }}>
      <div
        style={{
          color: "#1E0E62",
          fontWeight: "500",
          fontSize: "14px",
          cursor: "pointer",
        }}>
        {heading}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "10px",
          fontWeight: "400",
          fontSize: "13px",
        }}>
        {options.map((option, index) => (
          <span key={index} style={{ cursor: "pointer" }}>
            {option}
          </span>
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div
      style={{
        backgroundColor: "#FAFAFA",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "50px",
      }}>
      {/* main */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "30px",
        }}>
        <div style={{ color: "#1E0E62", fontWeight: "600", cursor: "pointer" }}>
          {footerUtil.heading}
        </div>
        <div
          style={{
            color: "#9E9EAD",
            fontWeight: "400",
            fontSize: "12px",
            width: "40%",
          }}>
          {footerUtil.content}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "20px",
          }}>
          {footerUtil.icons.map((icon, index) => (
            <img
              src={icon}
              alt=""
              style={{ width: "13px", height: "13px", cursor: "pointer" }}
            />
          ))}
        </div>
      </div>

      {/* features */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          gap: "80px",
        }}>
        {footerUtil.options.map((option, index) => (
          <Feature
            key={index}
            heading={option.heading}
            options={option.features}
          />
        ))}
      </div>
    </div>
  );
}

export default Footer;

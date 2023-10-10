import React from "react";
import { navbarUtil } from "./Utils/constants";

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        // position: "fixed",
        width: "100%",
        padding: "30px",
        gap: "800px",
      }}>
      <div
        style={{
          fontWeight: "600",
          color: "#1E0E62",
          fontSize: "18px",
          //   marginRight: "20px",
          cursor: "pointer",
        }}>
        {navbarUtil.heading}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "20px",
          color: "#9E9EAD",
          fontSize: "13px",
          //   marginRight: "100px",
        }}>
        {navbarUtil.options.map((option, index) => (
          <div key={index} style={{ cursor: "pointer" }}>
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navbar;

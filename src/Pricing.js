import React from "react";
import PricingBox from "./common/PricingBox";
import { pricingUtil } from "./Utils/constants";

const pricing = ["19", "49", "99"];

function Pricing() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "50px",
          padding: "100px",
          width: "70%",
          // justifyContent: "center",
          // alignItems: "center",
        }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            alignItems: "center",
          }}>
          <div
            style={{ color: "#1E0E62", fontWeight: "600", fontSize: "30px" }}>
            {pricingUtil.heading}
          </div>
          <div
            style={{ color: "#9E9EAD", fontWeight: "400", fontSize: "13px" }}>
            {pricingUtil.content}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "50px",
          }}>
          {pricing.map((priceBox, index) => (
            <PricingBox
              key={index}
              heading={index === 0 ? "Start" : pricingUtil.box.heading}
              price={priceBox}
              peruser={pricingUtil.box.perUser}
              content={pricingUtil.box.description}
              perMonth={pricingUtil.box.perMonth}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pricing;

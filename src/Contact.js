import React from "react";
import { contactUtil } from "./Utils/constants";
import down from "./Utils/icons/down.png";
import Button from "./common/Button";

const placeholders = ["Your name", "Your email", "Your phone"];
const budget = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function FormField({ placeholder, index }) {
  return (
    <div
      style={{
        gridColumnStart: index === 2 && "1",
        gridColumnEnd: index === 2 && "4",
      }}>
      <input
        type="text"
        placeholder={placeholder}
        style={{
          border: "1px solid #9E9EAD",
          borderRadius: "20px",
          padding: "10px",
          //   width: "100%",
        }}
      />
    </div>
  );
}

function Contact() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          alignItems: "center",
          padding: "100px",
          paddingTop: "0",
          width: "70%",
          justifyContent: "center",
          position: "relative",
        }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "30px",
            width: "100%",
          }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "25px",
              width: "40%",
            }}>
            <div
              style={{ color: "#1E0E62", fontWeight: "600", fontSize: "30px" }}>
              {contactUtil.heading}
            </div>
            <div style={{ color: "#9E9EAD", fontWeight: "500" }}>
              {contactUtil.content}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "10px",
              }}>
              <img
                src={contactUtil.icon}
                alt=""
                style={{ width: "12px", height: "12px", cursor: "pointer" }}
              />
              <div style={{ fontSize: "13px" }}>{contactUtil.call}</div>
            </div>
          </div>
          <form style={{ width: "30rem", position: "relative" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(2, 1fr)" /* First row: 2 columns */,
                gridTemplateRows: " repeat(2, 1fr)" /* Two rows */,
                gridGap: "10px",
                // width: "100%",
              }}>
              {placeholders.map((field, index) => (
                <FormField key={index} placeholder={field} index={index} />
              ))}
              <select
                style={{
                  border: "1px solid #9E9EAD",
                  borderRadius: "20px",
                  padding: "10px 15px",
                  appearance: "none",
                  //   width: "100%",
                  //   gridColumnStart: "3",
                  //   gridColumnEnd: "4",
                }}>
                <option style={{ color: "#1E0E62", fontWeight: "600" }}>
                  Budget
                </option>
                {budget.map((field, index) => {
                  return <option key={index}>{`${field}M`}</option>;
                })}
              </select>
              <select
                style={{
                  border: "1px solid #9E9EAD",
                  borderRadius: "20px",
                  padding: "10px 15px",
                  position: "relative",
                  appearance: "none",
                  //   width: "100%",
                  //   gridColumnStart: "4",
                  //   gridColumnEnd: "6",
                }}>
                <option style={{ color: "#1E0E62", fontWeight: "600" }}>
                  Company size
                </option>
                {budget.map((field, index) => {
                  return <option key={index}>{`${field}`}</option>;
                })}
              </select>
            </div>
            <div style={{ position: "relative" }}>
              <input
                type="textarea"
                style={{
                  border: "1px solid #9E9EAD",
                  borderRadius: "5px",
                  padding: "10px",
                  margin: "10px 0",
                  width: "100%",
                  height: "5rem",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "5px",
                  padding: "5px",
                  color: "#9E9EAD",
                  fontSize: "13px",
                  fontWeight: "500",
                }}>
                Your message
              </span>
            </div>
            <div
              style={{
                backgroundColor: "#E93A7D",
                borderRadius: "20px",
                width: "8rem",
                color: "white",
                textAlign: "center",
                padding: "13px 10px",
                fontSize: "13px",
                position: "absolute",
                bottom: "-50px",
                right: "-20px",
                cursor: "pointer",
              }}>
              {contactUtil.button}
            </div>
            <Button
              text={contactUtil.button}
              width={"8rem"}
              fontSize={"13px"}
              position={"absolute"}
              bottom={"-50px"}
              right={"-20px"}
              padding={"13px 10px"}
            />
          </form>
        </div>

        {/* help */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "10px",
            width: "21%",
            position: "absolute",
            right: "0",
            marginRight: "300px",
          }}>
          <div
            style={{ color: "#1E0E62", fontWeight: "500", fontSize: "16px" }}>
            {contactUtil.helpHeading}
          </div>
          <div
            style={{ color: "#9E9EAD", fontWeight: "400", fontSize: "12px" }}>
            {contactUtil.help}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

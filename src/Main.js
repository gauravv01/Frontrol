import IconBox from "./common/IconBox";
import { mainUtil } from "./Utils/constants";
import Button from "./common/Button";
import Tag from "./common/Tag";
import ReactSpring from "./common/FreeFall";

function Main() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
      {/* sample-content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "50px",
          width: "30%",
          alignItems: "center",
          gap: "30px",
          textAlign: "center",
        }}>
        <div
          style={{
            color: "#1E0E62",
            fontWeight: "600",
            fontSize: "34px",
          }}>
          {mainUtil.heading}
        </div>
        <div
          style={{ color: "#9E9EAD", fontWeight: "500", lineHeight: "28px" }}>
          {mainUtil.content}
        </div>
        <Button width={"10rem"} text={mainUtil.exploreButton} />
      </div>

      {/* free-fall */}
      {/* <FloatingText /> */}
      {/* <ReactSpring /> */}

      {/* action-items */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          width: "50%",
          padding: "50px",
          gap: "200px",
        }}>
        {/* left */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "50px",
          }}>
          {Object.values(mainUtil.actionItems.left).map((box, index) => {
            return (
              <IconBox
                key={index}
                icon={box.icon}
                heading={box.heading}
                content={box.content}
              />
            );
          })}
        </div>
        {/* right */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}>
          <div
            style={{ color: "#1E0E62", fontWeight: "600", fontSize: "30px" }}>
            {mainUtil.actionItems.right.heading}
          </div>
          <div style={{ color: "#9E9EAD", fontWeight: "500" }}>
            {mainUtil.actionItems.right.content}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "15px",
              justifyContent: "flex-start",
            }}>
            <Button width={"8rem"} text={mainUtil.actionItems.right.button} />

            {mainUtil.actionItems.right.icons.map((icon, index) => (
              <img
                key={index}
                src={icon}
                alt=""
                style={{ width: "30px", height: "30px", cursor: "pointer" }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

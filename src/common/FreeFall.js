// import React from "react";
// import Button from "./Button";
// import "./Freefall.css"; // Import the CSS file for styling

// const freeFallBackGroundColors = [
//   "#C0D738",
//   "#70DDB2",
//   "#90D7FF",
//   "#FF7D7C",
//   "#F8FD91",
//   "#CB9BFA",
// ];

// const FloatingText = () => {
//   return (
//     <div className="floating-text-container">
//       {/* <div className="floating-text">Floating Text</div> */}
//       <Button
//         position={"absolute"}
//         width={"8rem"}
//         top={"0"}
//         // left={box.xPos}
//         fontSize={"14px"}
//         color={"black"}
//         text={"Sample Text"}
//         backgroundColor={
//           freeFallBackGroundColors[Math.floor(Math.random() * 5) + 1]
//         }
//         className={"floating-text"}
//       />
//     </div>
//   );
// };

// export default FloatingText;

import React from "react";
import { useSpring, animated } from "react-spring";
import "./Freefall.css";

const FallingTag = () => {
  const props = useSpring({
    from: { transform: "translateY(-100vh)" },
    to: { transform: "translateY(100vh)" },
    config: { tension: 80, friction: 12 },
  });

  return (
    <animated.div className="falling-tag" style={props}>
      Your Tag
    </animated.div>
  );
};

export default FallingTag;

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";

function Mouse() {
  const location = useLocation();
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Hide the cursor on initial render
    setShowCursor(false);

    // Delay the cursor visibility to ensure smooth transition
    const delayTimeout = setTimeout(() => {
      setShowCursor(true);
    }, 0);

    return () => {
      clearTimeout(delayTimeout);
    };
  }, [location]);

  return (
    <>
      {showCursor && (
        <AnimatedCursor
          id="mouse"
          innerSize={0}
          outerSize={35}
          color="255, 255, 255"
          outerAlpha={1}
          innerScale={0.5}
          outerScale={0.5}
          hasBlendMode={true}
          trailingSpeed={10}
          // innerStyle={{
          //   mixBlendMode: "difference",
          // }}
          outerStyle={{
            mixBlendMode: "difference",
          }}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'input[type=""]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
          ]}
        />
      )}
    </>
  );
}

export default Mouse;

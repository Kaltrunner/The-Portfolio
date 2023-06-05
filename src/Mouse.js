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
          innerSize={25}
          outerSize={25}
          color="255, 255, 255"
          outerAlpha={0.1}
          innerScale={0.5}
          outerScale={2}
          hasBlendMode={true}
          trailingSpeed={15}
          innerStyle={{
            mixBlendMode: "difference",
          }}
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

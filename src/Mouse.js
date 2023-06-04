import AnimatedCursor from "react-animated-cursor";

function Mouse() {
  return (
    <>
      <AnimatedCursor
        id="mouse"
        innerSize={35}
        outerSize={35}
        color="255, 255, 255"
        outerAlpha={0.1}
        innerScale={.5}
        outerScale={1}
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
    </>
  );
}

export default Mouse;

import AnimatedCursor from "react-animated-cursor";

function Mouse() {
  return (
    <>
      <AnimatedCursor
        id="mouse"
        innerSize={20}
        outerSize={18}
        color="255, 255, 255"
        //  color='242, 163, 179'
        outerAlpha={0.1}
        innerScale={1}
        outerScale={5}
        hasBlendMode={true}
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

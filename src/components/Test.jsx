import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

const Test = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../images/test.json"),
    });
  }, []);

  return (
    <div className="App">
      <div
        className="container"
        ref={container}
        style={{ height: "100px" }}
      ></div>
    </div>
  );
};

export default Test;

import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Java Fullstack Developer",
          "React Developer",
          "Pre-Final Year Student",
          "Ex-Intern of Humming Byte Pvt Ltd",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
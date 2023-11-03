import React from "react";

const AboutMe = (props) => {
  return (
    <>
      <div>
        <p>Hello {" " + props.name}</p>
        <p>I am {" " + props.age + " "} years old</p>
        <p>
          My children are {" " + props.children.first + " "} and{" "}
          {" " + props.children.second}
        </p>
      </div>
    </>
  );
};

export default AboutMe;

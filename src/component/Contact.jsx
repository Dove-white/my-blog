import React from "react";
// import { Button } from "./UI/Button";
import Posts from "./UI/Post";
import { Nav } from "./UI/nav";
// import AboutMe from "./UI/AboutMe";

function Contact() {
  const handleSubmit = () => {
    console.log("Why not you");
  };

  const person = {
    name: "Redeemer",
    age: 23,
    children: {
      first: "Sera",
      second: "Ede",
    },
  };
  const displayRed = false;
  const displayGreen = false;
  return (
    <>
      <Nav />
      {/* <article className="flex justify-center items-center h-[100vh]">
        <div className="flex flex-col items-center">
          <p className="">My Contact</p>
          <Button name="Click Me" type="button" onClick={handleSubmit} />
          <AboutMe
            name={person.name}
            age={person.age}
            children={person.children}
          />
        </div>
      </article> */}
      <Posts displayRed={displayRed} displayGreen={displayGreen} />
    </>
  );
}

export default Contact;

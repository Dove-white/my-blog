import React from "react";
import { Button } from "./UI/Button";
import { Nav } from "./UI/nav";

function Contact() {
  const handleSubmit = () => {
    console.log("Why not you");
  };
  return (
    <>
      <Nav />
      <article className="flex justify-center items-center h-[100vh]">
        <div className="flex flex-col items-center">
          <p className="">My Contact</p>
          <Button name="Click Me" type="button" onClick={handleSubmit} />
        </div>
      </article>
    </>
  );
}

export default Contact;

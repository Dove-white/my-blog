import React, { useEffect, useState } from "react";
// import Paginating from "./UI/Paginating";
import Posts from "./UI/Post";
import { Nav } from "./UI/Nav";

function HomePage() {
  const displayRed = false;
  const displayGreen = true;

  return (
    <>
      <Nav />
      <Posts displayRed={displayRed} displayGreen={displayGreen} />
    </>
  );
}

export default HomePage;

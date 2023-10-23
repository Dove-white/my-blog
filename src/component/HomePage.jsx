import React, { useEffect, useState } from "react";
import { Nav } from "./UI/nav";

function HomePage() {
  const [posts, setPosts] = useState(null);
  let url = "https://jsonplaceholder.typicode.com/todos";
  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Request fail " + response.status);
        }
      })
      .then((data) => {
        setPosts(data);
      });
  }, []);
  return (
    <>
      <Nav />
      <article className="flex justify-center">
        <div className="flex flex-wrap justify-evenly w-[80%] shadow">
          {posts?.map((post) => (
            <li
              key={post.id}
              className={
                post?.completed === true
                  ? "mt-4 p-3 list-none bg-green-500"
                  : "mt-4 p-3 list-none bg-red-500"
              }
            >
              {post?.title}
            </li>
          ))}
        </div>
      </article>
    </>
  );
}

export default HomePage;

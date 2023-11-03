import React, { useEffect, useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
const Posts = (props) => {
  const [posts, setPosts] = useState(null);
  const url = "https://jsonplaceholder.typicode.com/todos";

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Request failed with status: " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data fetched:", data);
        setPosts(data);
      })
      .catch((error) => {
        console.error("Fetch error: ", error);
      });
  }, []);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 7;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = posts?.slice(firstIndex, lastIndex);

  const nPage = Math.ceil((posts?.length || 0) / recordsPerPage); // Use Math.ceil to get the total pages
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    if (currentPage !== nPage) setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <p>Pag: {currentPage}</p>
      <article className="flex justify-center">
        <div className="flex flex-col justify-around w-1/2 shadow">
          {records?.map((post) => (
            <div key={post.id}>
              <div
                className={
                  post?.completed === props.displayRed || props.displayGreen
                    ? "flex items-center gap-2"
                    : "hidden"
                }
              >
                <p className="font-bold">Post: </p>
                <li className="mb-1 list-none capitalize">{post?.title}</li>
              </div>
              <div
                className={
                  post?.completed === props.displayRed || props.displayGreen
                    ? "mb-3 flex items-center gap-2 group"
                    : "hidden"
                }
              >
                <p className="font-bold">Status: </p>
                <li
                  className={
                    post?.completed
                      ? "w-3 h-3 list-none bg-green-500 group-hover:bg-green-800 group-hover:rounded-full transition-all"
                      : "w-3 h-3 list-none bg-red-500 group-hover:bg-red-800 group-hover:rounded-full transition-all"
                  }
                ></li>
              </div>
            </div>
          ))}
        </div>
      </article>
      <div className="flex justify-center items-center absolute bottom-0 right-1/2 posRightCenter">
        <button
          className=" p-3  text-black mr-1 flex flex-row-reverse items-center group"
          onClick={prevPage}
        >
          Prev{" "}
          <FiChevronLeft className="h-10 w-10 text-[blue] transition-all group-hover:-translate-x-1" />
        </button>
        {/* {numbers?.map((num, index) => (
          <button
            className={
              currentPage === index + 1
                ? "p-2 text-white mr-1 bg-black"
                : "p-2 bg-slate-500 text-white mr-1"
            }
            key={num}
            onClick={() => changeCPage(num)}
          >
            {currentPage}
          </button>
        ))} */}
        <p className="h-6 w-6 bg-[blue] text-white text-center">
          {currentPage}
        </p>
        <button
          className=" p-3  text-black flex items-center group"
          onClick={nextPage}
        >
          {" "}
          Next{" "}
          <FiChevronRight className="h-10 w-10 text-[blue] transition-all group-hover:translate-x-1" />
        </button>
      </div>
    </>
  );
};

export default Posts;

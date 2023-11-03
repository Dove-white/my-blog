// import { Button } from "./UI/Button";
import Posts from "./UI/Post";
import { Nav } from "./UI/Nav";

function Message() {
  const handleSubmit = () => {
    console.log("Why me");
  };
  const displayRed = true;
  const displayGreen = false;
  return (
    <>
      <Nav className="" />
      {/* <article className="flex justify-center items-center h-[100vh]">
        <div className="flex flex-col items-center">
          <p>My Message</p>
          <Button name="Submit" type="button" onClick={handleSubmit} />
        </div>
      </article> */}
      <Posts displayRed={displayRed} displayGreen={displayGreen} />
    </>
  );
}

export default Message;

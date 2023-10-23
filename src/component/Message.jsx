import { Button } from "./UI/Button";
import { Nav } from "./UI/nav";

function Message() {
  const handleSubmit = () => {
    console.log("Why me");
  };
  return (
    <>
      <Nav className="" />
      <article className="flex justify-center items-center h-[100vh]">
        <div className="flex flex-col items-center">
          <p>My Message</p>
          <Button name="Submit" type="button" onClick={handleSubmit} />
        </div>
      </article>
    </>
  );
}

export default Message;

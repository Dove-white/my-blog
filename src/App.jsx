import { Routes, Route } from "react-router-dom";
import "./App.css";
import Message from "./component/Message";
import Contact from "./component/Contact";
import HomePage from "./component/HomePage";
import NotFound from "./component/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/message" element={<Message />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

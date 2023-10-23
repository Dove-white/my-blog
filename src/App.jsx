import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Message from "./component/Message";
import Contact from "./component/Contact";
import HomePage from "./component/HomePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/message" element={<Message />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

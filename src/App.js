import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pagesAdmin/Login";
import ManageFrame from "./pagesAdmin/ManageFrame";
import Transaction from "./pagesAdmin/Transaction";
import ManageColour from "./pagesAdmin/ManageColour";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/frame" element={<ManageFrame />} />
        <Route path="/colour" element={<ManageColour />} />
        <Route path="/transaction" element={<Transaction />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
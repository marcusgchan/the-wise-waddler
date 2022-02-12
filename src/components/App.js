import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import QuotesPage from "./QuotesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/saved-quotes" element={<QuotesPage />} />
    </Routes>
  );
}

export default App;

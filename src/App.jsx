import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./Components/Notfound/notfound";
import Dashboard from "./Components/Dashboard/dashboard";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
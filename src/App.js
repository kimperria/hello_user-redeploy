import "./App.css";
import Create from "./components/create/create";
import Read from "./components/read/read";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Update from "./components/update/update";
import Delete from "./components/delete/delete";

function App() {
  return (
    <Router>
      <div className="main">
        <div>
          <h3>React Crud operations</h3>
        </div>

        <div>
          <Routes>
            <Route exact path="/" element={<Create/>}/>
          </Routes>
        </div>

        <div style={{ marginTop: 20 }}>
          <Routes>
            <Route exact path="/read" element={<Read/>} />
          </Routes>
        </div>
        <Routes>
          <Route path="/update" component={Update} />
          <Route path="/delete" component={Delete} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

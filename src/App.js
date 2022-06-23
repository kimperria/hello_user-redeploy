import "./App.css";
import Home from "./components/home/home";
import Navbar from "./components/navbar/navbar";
import Create from "./components/create/create";
import Read from "./components/read/read";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Update from "./components/update/update";
import Delete from "./components/delete/delete";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/read" element={<Read />} />
          <Route path="/update" component={Update} element={<Update />} />
          <Route path="/delete" component={Delete} />
        </Routes>
      </Router>
    </>
    // <Router>
    //   <div className="main">
    //     <div>
    //       <h3>React Crud operations</h3>
    //       <button className="btn btn-primary">Add</button>
    //     </div>

    //     <div>
    //       <Routes>
    //         <Route exact path="/" element={<Create/>}/>
    //       </Routes>
    //     </div>

    //     <div style={{ marginTop: 20 }}>
    //       <Routes>
    //         <Route exact path="/read" element={<Read/>} />
    //       </Routes>
    //     </div>
    //     <Routes>
    //       <Route path="/update" component={Update} element={<Update/>}/>
    //       <Route path="/delete" component={Delete} />
    //     </Routes>
    //   </div>
    // </Router>
  );
}

export default App;

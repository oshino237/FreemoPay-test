import Firtscompo from "./Composants/Firtscompo";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Composants/Navbar";
import PostCherchees from "./Composants/PostCherchees";
import Footer from "./Composants/Footer";

// function PageEror() {
//   return (
//     <div>
//       <h2>une erreur s'est produite</h2>
//     </div>
//   );
// }
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Firtscompo />} />
        <Route path="/recipefind/:id" element={<PostCherchees />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

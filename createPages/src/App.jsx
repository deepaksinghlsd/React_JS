import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contactpage from "./components/ContactPage";
import Layout from "./components/Layout";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/Home" element={<Home />} />
          <Route path="/contact" element={<Contactpage />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;

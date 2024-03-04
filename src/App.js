import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import StartPresenting from "./frontend/Components/StartPresenting";
import KeyPoints from "./frontend/Components/KeyPoints";
import Slides from "./frontend/Components/Slides";
import Archive from "./frontend/Components/Archive";
import Home from "./frontend/Components/Home";
import Login from "./frontend/Components/Login";
import SlideViewer from "./frontend/Components/SlideViewer";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

 

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/startpresenting" element={<StartPresenting />} /> 
      <Route path="/archive" element={<Archive />} />
      <Route path="/slides" element={<Slides />} />
      <Route path="/keypoints" element={<KeyPoints />} />
      <Route path="/slideViewer" element={<SlideViewer />} />
    </Routes>
  );
}
export default App;

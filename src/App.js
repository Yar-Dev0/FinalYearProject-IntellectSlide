import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Desktop13 from "./frontend/Desktop13";
import Desktop14 from "./frontend/Desktop14";
import Desktop9 from "./frontend/Desktop9";
import Desktop12 from "./frontend/Desktop12";
import Desktop11 from "./frontend/Desktop11";
import Desktop1 from "./frontend/Desktop1";
import SlideViewer from "./frontend/SlideViewer";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-14":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-9":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-12":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-11":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/desktop-13" element={<Desktop13 />} />
      <Route path="/desktop-14" element={<Desktop14 />} />
      <Route path="/desktop-9" element={<Desktop9 />} />
      <Route path="/desktop-12" element={<Desktop12 />} />
      <Route path="/desktop-11" element={<Desktop11 />} />
      <Route path="/" element={<Desktop1 />} />
      <Route path="/startPresentingScreen" element={<SlideViewer />} />
    </Routes>
  );
}
export default App;

import { Layout } from "./components/Layout/Layout";
import About from "./pages/About/About";
import Education from "./pages/Educations/Education";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/Techstack/Techstack";
import WorkExp from "./pages/WorkExp/WorkExp";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./Context/ThemeContext";
import Tada from "react-reveal/Tada";

function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        
        <Layout />
        <div className="container">
          <About />
          <Education />
          <Techstack />
          <Projects />
          <WorkExp />
          <Contact />
        </div>
      </div>
      <div className="footer pb-3 ms-3">
          
            <h4 className="text-center"> Portfolio Website &copy; 2024</h4>
          
      </div>
      <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
      
    </>
  );
}

export default App;

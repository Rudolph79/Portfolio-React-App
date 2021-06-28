import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Particles from "react-particles-js";

const App = () => {
  return (
    <div className="App">
      <Particles
        className="particles-canvas"
        params={{
            particles:{
                number: {
                    value: 30,
                    density: {
                        enable: true,
                        value_area: 900
                    }
                },
                shape: {
                    type: "circle",
                    // type: "square",
                    // type: "star",
                    stroke: {
                        width: 6,
                        color: "#f9ab00"
                    }
                }
            }
        }}
      />
      <Navbar />
      <Header />
      <AboutMe />
    </div>
  );
}

export default App;

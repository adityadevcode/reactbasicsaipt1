import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Mainpage from "./Components/Mainpage";
import Footer from "./Components/Footer";
import Homestyle from "./Components/Homestyle.css"
import Navbarstyle from "./Components/Navbarstyle.css";
import Footerstyle from "./Components/Footerstyle.css";


function App() {
  return (
    <div>
      {/* <h2>App Component</h2> */}
      <Navbar/>
       <Home />
      <Mainpage/>
      <Footer/>
    </div>
  );
}

export default App;

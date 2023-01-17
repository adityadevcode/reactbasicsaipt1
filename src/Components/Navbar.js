// Basic Nav bar component
import {Link,Route} from 'react-router-dom';

function Navbar() {
  
  return (
    <nav>
        <a href="#home">Home</a>
        <a href="#About">About</a>
        <a href="#Services">Services</a>
        <a href="#Reach US">Reach US</a>
    </nav>
  );
}

export default Navbar;


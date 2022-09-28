import './App.css';
// import {Container, Heading} from '@chakra-ui/react';
import Carousal from './Components/slider';
import Boxes from './Components/CatagoryBoxes';
import Navbar from './Components/navbar';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousal/>
      <Boxes />
    </div>
  );
}

export default App;

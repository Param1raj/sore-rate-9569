import './App.css';
import Items from './Components/scrollableItems';
import Carousal from './Components/slider';
import Boxes from './Components/CatagoryBoxes';
import Navbar from './Components/navbar';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousal/>
      <Boxes />
      <Items />
    </div>
  );
}

export default App;

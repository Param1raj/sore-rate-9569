import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/HomePage';
import Footer from './Components/footer';
import MainRoutes from './Components/Routes/MainRoutes';
import NavbarBox from './Components/Navbar/navbar';


function App() {
  return (
    <div className="App">
      <NavbarBox/>
      <MainRoutes/>
      <Home />
      <Footer/>
    </div>
  );
}

export default App;

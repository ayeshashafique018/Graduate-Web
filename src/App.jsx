import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ConfettiComponent from './components/ConfettiComponent';
import Home from './pages/Home';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <ConfettiComponent />
      <div className="container py-4 flex-grow-1">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;

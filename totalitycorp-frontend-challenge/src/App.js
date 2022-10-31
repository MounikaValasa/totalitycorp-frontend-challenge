import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Footer from './components/footer';
function App() {
  return (
    <div>
      <section>
        <Navbar />
        <Home />
        <Footer/>
      </section>
    </div>
  );
}

export default App;

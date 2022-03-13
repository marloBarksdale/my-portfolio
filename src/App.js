import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className='App'>
      <Header />
      <Nav />
      <Portfolio />
      {/* <About /> */}
      <Skills />

      <Contact />
      <Footer />
    </div>
  );
}

export default App;

import './App.css';
import Hero from './components/heroSection/hero'
import About from './components/aboutSection/about'
import Skills from './components/skillsSection/skills'
import Porto from './components/PortoSection/porto'
import Footer from './components/footerSection/footer'

function App() {
  return (
    
    <div className="App">
      <Hero/>
      <About/>
      <Skills/>
      <Porto/>
      <Footer/>
    </div>
  );
}

export default App;


import './App.scss';
import Header from './components/header/Header'
import About from './components/about/About'
import Icons from './components/icons/Icons'
import Works from './components/works/Works'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
        <Header />
        <About />
        <Icons />
        <Works />
        <Footer />
    </div>
  );
}

export default App;

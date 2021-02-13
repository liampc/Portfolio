
import './_App.scss';
import './main.scss';

import Header from './layout/header/Header';
import Home from './layout/home/Home';
import About from './layout/about/About';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
          <Home />
          <About />
      </main>
    </div>
  );
}

export default App;

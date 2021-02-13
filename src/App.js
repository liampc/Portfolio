
import './_App.scss';
import './main.scss';

import Header from './layout/header/Header';
import Home from './layout/home/Home'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
          <Home />
      </main>
    </div>
  );
}

export default App;

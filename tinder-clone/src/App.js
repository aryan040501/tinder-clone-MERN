
import './App.css';
import Header from './Header';
import SwipeButton from './SwipeButton';
import TinderCards from './TinderCards';

function App() {
  return (
    // BEM class naming convenstion
    <div className="app">

      <Header/>
      <TinderCards/>
      <SwipeButton/>

    </div>
  );
}

export default App;

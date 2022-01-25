
import './App.css';
import Navbar from './components/navbar'
import Footer from './components/footer'
import MetState from './components/metState'
import Counter from './components/counter'
import MetSetState from './components/metSetState'
import Parent from './components/Parent';

function App() {
  return (
    <div className="App">
       hello vijay  thisis america
       <Navbar/>
       <Footer name="vijay ratan singh" age="23" />
       <MetState/>
       <Counter/>
       <MetSetState />
       <Parent />
    </div>
  );
}

export default App;


import './App.css';
import Navbar from './components/navbar'
import Footer from './components/footer'
import MetState from './components/metState'
import Counter from './components/counter'
import MetSetState from './components/metSetState'
import Parent from './components/Parent';
import Render from './components/renderCondition'
import Array from './components/Arrays'

function App() {
  return (
    <div className="App">
       
       <Array />
       <Render />
      
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

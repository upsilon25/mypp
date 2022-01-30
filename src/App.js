
import './App.css';
import Navbar from './components/navbar'
import Footer from './components/footer'
import MetState from './components/metState'
import Counter from './components/counter'
import MetSetState from './components/metSetState'
import Parent from './components/Parent';
import Render from './components/renderCondition'
import Array from './components/Arrays'
import NameList from './components/Namelist'
import Stylesheet from './components/Stylesheet'

import From from './components/Form';

function App() {
  return (
    <div className="App">
       <From />
       <Stylesheet />   
       <NameList />
       <h1>thos os new</h1>
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

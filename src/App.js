import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ad from './images/ad1.png';
import Latest from './components/Latest';
import Cart from './components/Cart';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <Navbar/><br/>
      <Switch>
        <Route path="/latest" exact component={Latest}/>
        <Route path="/latest/:id" component={Product}/>
        <Route path="/cart" exact component={Cart}/>
      </Switch><br/><br/>
      <img src={ad} className="img-fluid" alt="sale"></img><br/><br/><br/>
    </div>
  );
}

export default App;

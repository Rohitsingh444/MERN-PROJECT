
import './App.css';
import TEST from './TEST';
import Header from './Header';

import AddProduct from './AddProduct'
import UpdateProduct from './UpdateProduct'
import Login from './Login'
import Register from './Register'
import {Redirect, Route, Switch} from 'react-router-dom'
function App() {
  return (
    <div className="App">
     {/* <TEST/> */}
     
     <Switch>
    <Route exact path='/' component={Login}></Route>
    <Route exact path='/addproduct' component={AddProduct}></Route>
    <Route exact path='/updateproduct' component={UpdateProduct}></Route>
    <Route exact path='/register' component={Register}></Route>
    <Redirect to='/' ></Redirect>
    </Switch>
    
    </div>
  );
}

export default App;

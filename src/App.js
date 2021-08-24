
import './App.css';
import TEST from './TEST';
import Header from './Header';
import Protected from './Protected'
import AddProduct from './AddProduct'
import UpdateProduct from './UpdateProduct'
import Login from './Login'
import Register from './Register'
import profile from './Profile'
import {Redirect, Route, Switch} from 'react-router-dom'
import ProductList from './ProductList'
function App() {
  return (
    <div className="App">
     {/* <TEST/> */}
     
     <Switch>
    <Route exact path='/' component={Login}></Route>
   <Route exact path='/addproduct'><Protected component={AddProduct}/></Route>  
    {/* <Route exact path='/addproduct' component={AddProduct}></Route> */}
    <Route exact path='/updateproduct'><Protected component={UpdateProduct}/></Route>
    <Route exact path='/register' component={Register}></Route>
    <Route exact path='/productList' component={ProductList}></Route>
    <Route exact path='/profile' component={profile}></Route>
    <Redirect to='/' ></Redirect>
    </Switch>
    
    </div>
  );
}

export default App;

import React from 'react'
import {Link,useHistory} from 'react-router-dom'
import {NavDropdown} from 'react-bootstrap'

function Header() {
  const history=useHistory();
  const logout=()=>{
    history.push("/")

  }
    return (
        <div>
        
            {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" exact to="/">E-commerce Project</Link>
   
   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link " exact to="/addproduct">AddProduct</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  exact to="/updateproduct">UpdateProduct</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  exact to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  exact to="/register">Register</Link>
        </li>
        <li className="nav-item">
        <NavDropdown title="User Name" className="nav-item">
        <NavDropdown.Item onClick={logout}>LogOut</NavDropdown.Item>
        <NavDropdown.Item>Profile</NavDropdown.Item>
        </NavDropdown>
        </li>
      </ul>
    </div>
  </div>
</nav>   */}
       

 <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link className="navbar-brand"  exact to="/">E-commerce Project</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item">
          <Link className="nav-link " exact to="/addproduct">AddProduct</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  exact to="/updateproduct">UpdateProduct</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  exact to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  exact to="/register">Register</Link>
        </li>
      <li className="nav-item">
        <NavDropdown title="User Name" className="nav-item">
        <NavDropdown.Item onClick={logout}>LogOut</NavDropdown.Item>
        <NavDropdown.Item>Profile</NavDropdown.Item>
        </NavDropdown>
        </li>
    </ul>
    
  </div>
</nav>
 </div> 
    )
}

export default Header

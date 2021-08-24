
import Header from './Header'
import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Button } from 'bootstrap';
import { Domain } from '@material-ui/icons';


function ProductList() {

  const [data,setData]=useState([]);
   
    useEffect(()=>{
      getdata();
     
   },[])

    //  useEffect(()=>{
    //  fetch("/productdetails").then((result)=>{
    //  result.json().then((resp)=>{
    //      setData(resp);
    //    });
    //  })

    //  },[])
     const deleteProduct=(_id,name)=>{
     
    axios.delete("/deleteproduct/"+_id)
    alert(
      `${name} is successfully deleted`);
         getdata()
   
    };
    function getdata(){
      axios.get("/productdetails")
      .then(res => {
        const data = res.data;
        setData(data)
        console.warn("data",data);
      })
    }
    return (
        <div>
           <Header/> 
           <div className="container mt-5 " style={{height:'470px',margin:'auto',width:'80%',boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px',minWidth: '80%'}}>
           <br style={{marginTop:'-3%'}} />
              
      <table border="1" class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Image</th> 
      <th scope="col">Price</th>
      <th scope="col">Description</th>
      <th scope="col" colSpan="2">Operation</th>

    </tr>
  </thead>
  <tbody>
  {
    data.map((item)=>
    <tr>
      <td>{item.name}</td>
       <td><img src={"http://localhost:4000/productdetails"+item.file} /></td> 
      <td>{item.price}</td>
      <td>{item.description}</td>
      <td><button  className="btn btn-outline-primary " onClick={()=>{deleteProduct(item._id,item.name)}}>Delete</button></td>
      <td><Link exact to="/updateproduct"><span className="btn btn-outline-primary ">Update</span></Link></td>
   </tr>
    )
  }
  </tbody>
</table>
   </div>        
        </div>
    )
}
export default ProductList

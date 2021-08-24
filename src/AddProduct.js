import React,{useState} from 'react'
import Header from './Header'
import axios from 'axios';
function AddProduct() {
    const [name,setName]=useState("");
    const [file,setFile]=useState("");
    const [price,setPrice]=useState("");
    const [description,setDescription]=useState("");

    const data1=()=>
    {
        const data={
            name:name,
            file:file,
            price:price,
            description:description
        }
        console.log(name,file,price,description)
        // const formData=new FormData();
        // formData.append('file',file)
        // formData.append('name',name)
        // formData.append('price',price)
        // formData.append('description',description)
        axios.post("/productdetails",data)
        alert(
               `${name} is successfully added`);
            
             
    }
    return (
        <div >
        <Header/>
           <br/>
           <br/>
           <div className="container mt-5 Addproductbody " style={{height:'470px',margin:'auto',width: '50%',boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
           
               <h2 className="form-title my-4">Add Product</h2>

               <div className="row">
        <div className="col-md-10 col-10 mx-auto">
        <form >
       
        <div className="mb-3">
        <div className="col-sm-2">
        <label  className="form-label">Name</label>
        </div>
        <input type="text" 
               className="form-control" 
               
               placeholder="enter name" 
               value={name}
               onChange={(event)=>setName(event.target.value)} 
               required />
        </div>
        <div className="mb-3">
        <div className="col-sm-1">
        <label  className="form-label">File</label>
        </div>
        <input type="file" 
               className="form-control" 
               
               placeholder="file" 
              
               value={file} 
               onChange={(event)=>setFile(event.target.value)} 
               required/>
        </div>
        <div className="mb-3">
        <div className="col-sm-2 ">
        <label  className="form-label mr-5">Price</label>
        </div>
        <input type="number" 
               className="form-control" 
               
               
               placeholder="enter price" 
               value={price}
               onChange={(event)=>setPrice(event.target.value)} 
               required />
        </div>
        <div className="mb-3">
        <div className="col-sm-1">
        <label className="form-label">Description</label>
        </div>
        <input type="text"
               className="form-control" 
                
               
               placeholder="enter description" 
               value={description} 
               onChange={(event)=>setDescription(event.target.value)} 
               required/>
        </div>
        {/* <div classNameName="mb-3">
        <input classNameName="form-check-input" type="checkbox" id="autoSizingCheck" />  
        <label classNameName="form-check-label" for="autoSizingCheck">Remember me </label>
        </div> */}
        <div className="col-sm-12">
        <br></br>
        <button type="submit" 
                className="btn btn-primary btn-block" 
                onClick={data1}
                 >Submit</button>
               
        </div>
        </form>
        </div>
        </div>
        </div>
        </div>
    )
}

export default AddProduct

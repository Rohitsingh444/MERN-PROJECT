
import Header from './Header'
import React,{useState,useEffect} from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
function Profile() {
    return (
        <div>
         <Header/> 
           {/* <div className="container mt-5" style={{height:'470px',margin:'auto',width: '80%',boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
           <br style={{marginTop:'-3%'}} />
           <div class="row container d-flex justify-content-center">
            <div class="col-xl-6 col-md-12">
                <div class="card user-card-full">
                    <div class="row m-l-0 m-r-0">
                        <div class="col-sm-4 bg-c-lite-green user-profile">
                            <div class="card-block text-center text-white">
                                <div class="m-b-25"> <img src="https://img.icons8.com/bubbles/100/000000/user.png" class="img-radius" alt="User-Profile-Image" /> </div>
                                <h6 class="f-w-600">rohit Singh</h6>
                                <p>Web Designer</p> <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                            </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                      
                        
           </div> */}
           <div className="page-content page-container" id="page-content">
    <div className="padding">
        <div className="row container d-flex justify-content-center" >
            <div className="col-xl-6 col-md-12" style={{width: '82%'}}> 
                <div className="card user-card-full">
                    <div className="row m-l-0 m-r-0">
                        <div className="col-sm-4 bg-c-lite-green user-profile">
                            <div className="card-block text-center text-white">
                                <div className="m-b-25"> <img src="https://img.icons8.com/bubbles/100/000000/user.png" className="img-radius" alt="User-Profile-Image" /> </div>
                                <h6 className="f-w-600">Rohit Singh</h6>
                                <p>Web Designer</p> <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <div className="card-block">
                                <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <p className="m-b-10 f-w-600">Email</p>
                                        <h6 className="text-muted f-w-400">rohitsinghnegi1998@gmail.com</h6>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="m-b-10 f-w-600">Phone</p>
                                        <h6 className="text-muted f-w-400">8449201367</h6>
                                    </div>
                                </div>
                                <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Projects</h6>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <p className="m-b-10 f-w-600">Recent</p>
                                        <h6 className="text-muted f-w-400">E-commerce Project</h6>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="m-b-10 f-w-600">Most Viewed</p>
                                        <h6 className="text-muted f-w-400">E-commerce project</h6>
                                    </div>
                                </div>
                                <ul className="social-link list-unstyled m-t-40 m-b-10 ">
                                <li><a href="https://www.facebook.com/" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i class="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true"><FacebookIcon/></i></a></li>
                                    <li><a href="https://www.instagram.com/" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i class="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true"><InstagramIcon/></i></a></li>
                                    <li><a href="https://twitter.com/?lang=en" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i class="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true"><TwitterIcon/></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
</div>
        </div>
    )
}

export default Profile

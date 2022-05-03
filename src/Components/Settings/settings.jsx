import { Outlet, Link } from "react-router-dom";
import liveimg from './../../assets/images/1.png'
function Settings() {
    return (
    <> 
<section className="page-3">
    <div className="container py-4">
        <div className="row justify-content-center align-items-center">
            <div className="col-8">
             <p className=" p-0 m-0 page-3-p">
            <Link to="/dashboard" eplace className="btn shadow-none"> <span className="page-3-span-1">
                <svg width="19" height="31" viewBox="0 0 19 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 2L3 15.5L17 29" stroke="white" stroke-width="4"/>
                    </svg>                    
              </span></Link> 
              <span className="page-3-span-2 px-4"> 
                <img src={liveimg} alt="" srcset=""/>
              </span>
              <span className="h3 mx-2"> Samuel Doe</span>
             <span className="page-3-span-3">18BIS1241</span>
             </p>
            </div>
            <div className="col-4">
             <a href="#" className="btn shadow-none w-100">   <p className=" p-0 m-0 page-3-1-p-2 w-100 text-end">  
                    <span className="page-3-1-span-1">
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.28486 13.4219C3.32588 13.4219 3.36689 13.4178 3.40791 13.4116L6.85732 12.8066C6.89834 12.7984 6.9373 12.78 6.96602 12.7492L15.6593 4.05596C15.6783 4.03698 15.6934 4.01445 15.7037 3.98964C15.714 3.96483 15.7193 3.93824 15.7193 3.91138C15.7193 3.88452 15.714 3.85792 15.7037 3.83311C15.6934 3.80831 15.6783 3.78577 15.6593 3.7668L12.2509 0.356348C12.2119 0.317383 12.1606 0.296875 12.1053 0.296875C12.0499 0.296875 11.9986 0.317383 11.9597 0.356348L3.26641 9.04961C3.23564 9.08037 3.21719 9.11728 3.20898 9.1583L2.604 12.6077C2.58405 12.7176 2.59118 12.8306 2.62477 12.9371C2.65836 13.0436 2.7174 13.1403 2.79678 13.2188C2.93213 13.3501 3.10234 13.4219 3.28486 13.4219ZM4.66709 9.84531L12.1053 2.40918L13.6085 3.9124L6.17031 11.3485L4.34717 11.6705L4.66709 9.84531ZM16.0469 15.1445H0.953125C0.590137 15.1445 0.296875 15.4378 0.296875 15.8008V16.5391C0.296875 16.6293 0.370703 16.7031 0.460938 16.7031H16.5391C16.6293 16.7031 16.7031 16.6293 16.7031 16.5391V15.8008C16.7031 15.4378 16.4099 15.1445 16.0469 15.1445Z" fill="white"/>
                        </svg>                        
                    </span>

               <span className="page-3-1-span-2">Edit Profile Picture</span> </p></a>
            </div>
        </div>
    </div>
<div className="container pt-4 pb-1">
    <h5 className="General-Settings">General Settings</h5>
</div>
<div className="container bgcolor-setting">
    <div className="row align-items-center p-3 border-bottom border-white">
        <div className="col-8 ">
            <p className="setting-sub m-0 p-0 w-100 "> Settings 1</p>
        </div>
        <div className="col-4 text-end "> 
              <label className="switch">
                <input type="checkbox" checked/>
                <span className="slider round"></span>
              </label>
        </div>
    </div>
    <div className="row align-items-center p-3  border-bottom border-white">
        <div className="col-8">
            <p className="setting-sub m-0 p-0"> Settings 2</p>
        </div>
        <div className="col-4 text-end"> 
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
        </div>
    </div>

    <div className="row align-items-center p-3  ">
        <div className="col-8">
            <p className="setting-sub m-0 p-0"> Settings 2</p>
        </div>
        <div className="col-4 text-end"> 
              <label className="switch">
                <input type="checkbox" checked/>
                <span className="slider round"></span>
              </label>
        </div>
    </div>
    
</div>




<div className="container pt-4 pb-1">
    <div className="d-flex justify-content-between">
        <div>
            <h5 className="General-Settings">General Settings</h5>
        </div>
        <div>
            <a href="#" target="_blank" className="text-white" rel="noopener noreferrer">View More</a>
        </div>
   </div>


  
</div>
<div className="container bgcolor-setting">
    <div className="row align-items-center p-3 border-bottom border-white">
        <div className="col-8 ">
            <p className="setting-sub m-0 p-0 w-100 "> Settings 1</p>
        </div>
        <div className="col-4 text-end "> 
              <label className="switch">
                <input type="checkbox" checked/>
                <span className="slider round"></span>
              </label>
        </div>
    </div>
    <div className="row align-items-center p-3  border-bottom border-white">
        <div className="col-8">
            <p className="setting-sub m-0 p-0"> Settings 2</p>
        </div>
        <div className="col-4 text-end"> 
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
        </div>
    </div>

    <div className="row align-items-center p-3  ">
        <div className="col-8">
            <p className="setting-sub m-0 p-0"> Settings 2</p>
        </div>
        <div className="col-4 text-end"> 
              <label className="switch">
                <input type="checkbox" checked/>
                <span className="slider round"></span>
              </label>
        </div>
    </div>
    
</div>
</section>











   </>
    )
}  export default Settings;
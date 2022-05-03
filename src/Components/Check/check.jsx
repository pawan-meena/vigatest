import { Outlet, Link } from "react-router-dom";
import liveimg from './../../assets/images/4.png'
import liveimg1 from './../../assets/images/1.png'
function Check() {
    return (
    <> 
<section className="page-3">
    <div className="container py-4">
        <div className="row justify-content-center align-items-center">
            <div className="col-8 text-white page-3-p-4">
            <Link to="/dashboard" replace className="btn shadow-none"> <span className="page-3-span-1">
                <svg width="19" height="31" viewBox="0 0 19 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 2L3 15.5L17 29" stroke="white" stroke-width="4"/>
                    </svg>                    
              </span></Link> 
             Graduate Record Examination
            </div>
            <div className="col-4 text-white text-end">
             <p className="w-100 date-r text-end position-relative" >   17th Dec 2020 
                <span className="time-r">9:00 am - 12:00 pm </span>
             </p>
            </div>
        </div>
    </div>
<div className="container ">
    <div className="row     align-items-center">
        <div className="col-md-6 col-12 p-4 text-center">
        <img src={liveimg} className="w-75" alt="" srcset=""/>
        </div>
        <div className="col-md-6 col-12">
       <p className="m-0 p-0 mx-auto r-p"><span className=" mx-2"><svg width="42" height="31" viewBox="0 0 42 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 13.8947L15.4138 26L39 3" stroke="#A7F93F" stroke-width="6"/>
        </svg>
        </span> Webcam check</p><br/>
        <p className="m-0 p-0 mx-auto r-p"><span className=" mx-2"><svg width="42" height="31" viewBox="0 0 42 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 13.8947L15.4138 26L39 3" stroke="#A7F93F" stroke-width="6"/>
            </svg>
            </span> Mic check</p><br/>
            <p className="m-0 p-0 mx-auto r-p"><span className=" mx-2"><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.8973 22.1399L31.2267 35.4693L35.4693 31.2267L22.1399 17.8973L35.7945 4.24264L31.5519 0L17.8973 13.6546L4.24264 0L0 4.24264L13.6546 17.8973L0.325186 31.2267L4.56783 35.4693L17.8973 22.1399Z" fill="#FF5555"/>
                </svg>                
                </span> α Iris sync</p><br/>
                <p className="m-0 p-0 mx-auto r-p"><span className=" mx-2"><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.8973 22.1399L31.2267 35.4693L35.4693 31.2267L22.1399 17.8973L35.7945 4.24264L31.5519 0L17.8973 13.6546L4.24264 0L0 4.24264L13.6546 17.8973L0.325186 31.2267L4.56783 35.4693L17.8973 22.1399Z" fill="#FF5555"/>
                    </svg>
                    </span>BT / Alien hardware detection</p><br/>
                    <p className="m-0 p-0 mx-auto r-p"><span className=" mx-2"><svg width="42" height="31" viewBox="0 0 42 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 13.8334L15.4138 25.9387L39 2.93866" stroke="#A7F93F" stroke-width="6"/>
                        </svg>
                        </span> QR / Virtual Machine detection</p><br/>
                        <p className="m-0 p-0 mx-auto r-p"><span className=" mx-2"><svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M31 18.9387C31 26.1184 25.1797 31.9387 18 31.9387C10.8203 31.9387 5 26.1184 5 18.9387C5 11.759 10.8203 5.93866 18 5.93866V0.93866C8.05887 0.93866 0 8.99753 0 18.9387C0 28.8798 8.05887 36.9387 18 36.9387C27.9411 36.9387 36 28.8798 36 18.9387H31Z" fill="white" fill-opacity="0.5"/>
                            </svg>
                            </span> Browser lock</p><br/>
                            <p className="m-0 p-0 mx-auto r-p"><span className=" mx-2"><svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M31 18.9387C31 26.1184 25.1797 31.9387 18 31.9387C10.8203 31.9387 5 26.1184 5 18.9387C5 11.759 10.8203 5.93866 18 5.93866V0.93866C8.05887 0.93866 0 8.99753 0 18.9387C0 28.8798 8.05887 36.9387 18 36.9387C27.9411 36.9387 36 28.8798 36 18.9387H31Z" fill="white" fill-opacity="0.5"/>
                                </svg>
                                </span> Screen capture</p><br/>
                                <p className="m-0 p-0 mx-auto r-p"><span className=" mx-2"><svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M31 18.9387C31 26.1184 25.1797 31.9387 18 31.9387C10.8203 31.9387 5 26.1184 5 18.9387C5 11.759 10.8203 5.93866 18 5.93866V0.93866C8.05887 0.93866 0 8.99753 0 18.9387C0 28.8798 8.05887 36.9387 18 36.9387C27.9411 36.9387 36 28.8798 36 18.9387H31Z" fill="white" fill-opacity="0.5"/>
                                    </svg>
                                    </span> Identity authentication</p><br/>
                                <Link to="/exam" replace className="btn shadow-none w-100  rounded-0"><p className=" start-btn p-2 r-pp  "><span className="mx-2">
                                        </span> Start Exam</p></Link><br/>  
        </div>
    </div>
</div>


<div class="row bottom-text w-100 m-0 p-0 max-auto text-white px-5">
    <div class="col text-left ps-5 ms-3"> <Link to="" > <p class="text-white"><u></u></p></Link></div>
    <div class="col">
    <p class="pro-end ms-auto">  <Link to="/settings" replace class="text-white">
        <span class="name">Samuel Doe</span>
        <br/>
        <span class="span-n-check"> 18BIS1241</span>
        <img src={liveimg1} class="img-p-check" alt="" srcset=""/>
  
</Link>  </p>
</div>
</div>




</section>
    </>
    )
}  export default Check;

import { Outlet, Link } from "react-router-dom";
import liveimg from './../../assets/images/1.png'
function Dashboard() {
    return (
    <> 

<section class="myclasssec">
  <div class="container">
    <h3 class="hedingclass px-5 pt-5 pb-2">My Classes</h3>
  </div>


  <div class="accordion  expiteam container px-5" id="accordionExample">
    <div class="accordion-item my-4 rounded-0">
      <h2 class="accordion-header" id="CSE3013">


        <button class="accordion-button rounded-0 btn shadow-none btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
            <p class="position-relative">
                <span class="heading-h">
                 Neural Networks and Fuzzy Control
                </span>  
                <span class="heading-p"> 
                 CSE3013
                </span>  
              </p>
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="CSE3013" data-bs-parent="#accordionExample">
          <div class="accordion-body py-0">
       <div class="container">
           <div class="row p-3">
               <div class="col-2 text-left">  
         <p class="m-0 p-0">CAT 1</p>
               </div>
               <div class="col-8 text-center">
                <p class="m-0 p-0">22nd Dec 2020
                    <span class="time-f"><svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="3.33333" cy="3.5" r="3" fill="white"/>
                    </svg>
                    </span> 9:00 am - 12:00 pm 
             <Link to="#" class="btn shadow-none"> <span  class="time-f">
                        <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.48656 0.638489L0.137497 1.98755L24.5125 26.3625L25.8606 25.0144L22.375 21.5279V20.0625H21.4375C20.9219 20.0625 20.5 19.6407 20.5 19.125V10.951C20.5 7.36224 18.0794 4.31536 14.8459 3.45099C14.8562 3.3638 14.875 3.27943 14.875 3.18755C14.875 2.69027 14.6775 2.21336 14.3258 1.86173C13.9742 1.5101 13.4973 1.31255 13 1.31255C12.5027 1.31255 12.0258 1.5101 11.6742 1.86173C11.3225 2.21336 11.125 2.69027 11.125 3.18755C11.125 3.26818 11.1437 3.34505 11.1541 3.42193C9.88574 3.74013 8.72363 4.38683 7.78469 5.29693C7.50344 5.5688 7.25406 5.87161 7.02343 6.1763L1.48656 0.638489ZM12.5903 5.06255C12.7852 5.0516 12.9805 5.0516 13.1753 5.06255C16.1828 5.15443 18.625 7.79068 18.625 10.951V17.7769L8.37062 7.52443C8.57969 7.21693 8.8 6.90943 9.07375 6.64505C10.0375 5.70755 11.2675 5.15443 12.5894 5.06349L12.5903 5.06255ZM5.52812 9.98442C5.50771 10.2182 5.49832 10.4529 5.5 10.6875V19.125C5.5 19.6407 5.07812 20.0625 4.5625 20.0625H3.625V21.9375H10.3637C10.2511 22.2375 10.1915 22.5547 10.1875 22.875C10.1875 24.4172 11.4578 25.6875 13 25.6875C14.5422 25.6875 15.8125 24.4172 15.8125 22.875C15.8085 22.5547 15.7489 22.2375 15.6362 21.9375H17.5112L15.6362 20.0625H7.19875C7.30562 19.7691 7.375 19.455 7.375 19.125V11.8004L5.52812 9.98442ZM13 21.9375C13.5278 21.9375 13.9375 22.3482 13.9375 22.875C13.9375 23.4029 13.5269 23.8125 13 23.8125C12.4722 23.8125 12.0625 23.4019 12.0625 22.875C12.0625 22.3472 12.4731 21.9375 13 21.9375Z" fill="white" fill-opacity="0.5"/>
                        </svg>
                        </span> 
                      </Link>
                    </p>
                 </div>
                 <div class="col-2  text-white">
                 <Link to="#" class="btn rounded-0 btn shadow-none btn-completed" >Completed</Link>
            </div>
           </div>



           <div class="row my-3 p-3">
            <div class="col-2 text-left">  
      <p class="m-0 p-0">CAT 2</p>
            </div>
            <div class="col-8 text-center">
             <p class="m-0 p-0">22nd Dec 2020
                 <span class="time-f"><svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <circle cx="3.33333" cy="3.5" r="3" fill="white"/>
                 </svg>
                 </span> 9:00 am - 12:00 pm 
                 <Link to="#" class="btn shadow-none">  <span  class="time-f">
                    <svg width="20" height="25" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 0.3125C8.96406 0.3125 8.125 1.15156 8.125 2.1875C8.125 2.26813 8.14375 2.345 8.15406 2.42188C4.91313 3.24969 2.5 6.19344 2.5 9.6875V18.125C2.5 18.6556 2.09312 19.0625 1.5625 19.0625H0.625V20.9375H7.36375C7.25114 21.2374 7.19151 21.5547 7.1875 21.875C7.1875 23.4172 8.45781 24.6875 10 24.6875C11.5422 24.6875 12.8125 23.4172 12.8125 21.875C12.8085 21.5547 12.7489 21.2374 12.6363 20.9375H19.375V19.0625H18.4375C17.9069 19.0625 17.5 18.6556 17.5 18.125V9.95094C17.5 6.42781 15.145 3.28531 11.8459 2.42188C11.8562 2.345 11.875 2.26813 11.875 2.1875C11.875 1.15156 11.0359 0.3125 10 0.3125ZM9.58938 4.0625C9.72531 4.05125 9.86125 4.0625 10 4.0625H10.1762C13.2372 4.15438 15.625 6.8375 15.625 9.95094V18.125C15.625 18.455 15.6944 18.7663 15.8012 19.0625H4.19969C4.31197 18.7625 4.37129 18.4453 4.375 18.125V9.6875C4.37232 8.26432 4.90877 6.89294 5.87639 5.84931C6.84401 4.80567 8.17099 4.16725 9.59031 4.0625H9.58938ZM10 20.9375C10.5278 20.9375 10.9375 21.3481 10.9375 21.875C10.9375 22.4028 10.5269 22.8125 10 22.8125C9.47219 22.8125 9.0625 22.4019 9.0625 21.875C9.0625 21.3472 9.47313 20.9375 10 20.9375Z" fill="white"/>
                        </svg>                        
                     </span> </Link>
                 </p>
              </div>
              <div class="col-2  text-white text-end">
              <Link to="#" class="btn rounded-0 btn shadow-none btn-join-exam" >Join Exam</Link>
         </div>
        </div>


        <div class="row my-3 p-3">
            <div class="col-2 text-left">  
      <p class="m-0 p-0">LAB FAT</p>
            </div>
            <div class="col-8 text-center">
             <p class="m-0 p-0">22nd Dec 2020
                 <span class="time-f"><svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <circle cx="3.33333" cy="3.5" r="3" fill="white"/>
                 </svg>
                 </span> 9:00 am - 12:00 pm 
                 <Link to="#" class="btn shadow-none">    <span  class="time-f">
                    <svg width="20" height="25" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 0.3125C8.96406 0.3125 8.125 1.15156 8.125 2.1875C8.125 2.26813 8.14375 2.345 8.15406 2.42188C4.91313 3.24969 2.5 6.19344 2.5 9.6875V18.125C2.5 18.6556 2.09312 19.0625 1.5625 19.0625H0.625V20.9375H7.36375C7.25114 21.2374 7.19151 21.5547 7.1875 21.875C7.1875 23.4172 8.45781 24.6875 10 24.6875C11.5422 24.6875 12.8125 23.4172 12.8125 21.875C12.8085 21.5547 12.7489 21.2374 12.6363 20.9375H19.375V19.0625H18.4375C17.9069 19.0625 17.5 18.6556 17.5 18.125V9.95094C17.5 6.42781 15.145 3.28531 11.8459 2.42188C11.8562 2.345 11.875 2.26813 11.875 2.1875C11.875 1.15156 11.0359 0.3125 10 0.3125ZM9.58938 4.0625C9.72531 4.05125 9.86125 4.0625 10 4.0625H10.1762C13.2372 4.15438 15.625 6.8375 15.625 9.95094V18.125C15.625 18.455 15.6944 18.7663 15.8012 19.0625H4.19969C4.31197 18.7625 4.37129 18.4453 4.375 18.125V9.6875C4.37232 8.26432 4.90877 6.89294 5.87639 5.84931C6.84401 4.80567 8.17099 4.16725 9.59031 4.0625H9.58938ZM10 20.9375C10.5278 20.9375 10.9375 21.3481 10.9375 21.875C10.9375 22.4028 10.5269 22.8125 10 22.8125C9.47219 22.8125 9.0625 22.4019 9.0625 21.875C9.0625 21.3472 9.47313 20.9375 10 20.9375Z" fill="white"/>
                        </svg>                        
                     </span> </Link>
                 </p>
              </div>
              <div class="col-2  text-white text-end">
              <Link to="#" class="btn rounded-0 btn shadow-none btn-join-exam btn-completed" >Yet to start</Link>
         </div>
        </div>


       </div>
 </div>

      </div>


    </div>
    <div class="accordion-item my-3 rounded-0">
      <h2 class="accordion-header" id="ECE1029">
        <button class="accordion-button rounded-0 btn shadow-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
            <p class="position-relative">
                <span class="heading-h">
                 IOT System Architecture
                </span>  
                <span class="heading-p"> 
                 ECE1029
                </span>  
              </p>
        </button>
      </h2>
      <div id="collapseTwo" class="accordion-collapse collapse show" aria-labelledby="ECE1029" data-bs-parent="#accordionExample">
        <div class="accordion-body py-0">
       <div class="container">
           <div class="row p-3">
               <div class="col-2 text-left">  
         <p class="m-0 p-0">CAT 1</p>
               </div>
               <div class="col-8 text-center">
                <p class="m-0 p-0">22nd Dec 2020
                    <span class="time-f"><svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="3.33333" cy="3.5" r="3" fill="white"/>
                    </svg>
                    </span> 9:00 am - 12:00 pm 
                    <span  class="time-f">
                        <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.48656 0.638489L0.137497 1.98755L24.5125 26.3625L25.8606 25.0144L22.375 21.5279V20.0625H21.4375C20.9219 20.0625 20.5 19.6407 20.5 19.125V10.951C20.5 7.36224 18.0794 4.31536 14.8459 3.45099C14.8562 3.3638 14.875 3.27943 14.875 3.18755C14.875 2.69027 14.6775 2.21336 14.3258 1.86173C13.9742 1.5101 13.4973 1.31255 13 1.31255C12.5027 1.31255 12.0258 1.5101 11.6742 1.86173C11.3225 2.21336 11.125 2.69027 11.125 3.18755C11.125 3.26818 11.1437 3.34505 11.1541 3.42193C9.88574 3.74013 8.72363 4.38683 7.78469 5.29693C7.50344 5.5688 7.25406 5.87161 7.02343 6.1763L1.48656 0.638489ZM12.5903 5.06255C12.7852 5.0516 12.9805 5.0516 13.1753 5.06255C16.1828 5.15443 18.625 7.79068 18.625 10.951V17.7769L8.37062 7.52443C8.57969 7.21693 8.8 6.90943 9.07375 6.64505C10.0375 5.70755 11.2675 5.15443 12.5894 5.06349L12.5903 5.06255ZM5.52812 9.98442C5.50771 10.2182 5.49832 10.4529 5.5 10.6875V19.125C5.5 19.6407 5.07812 20.0625 4.5625 20.0625H3.625V21.9375H10.3637C10.2511 22.2375 10.1915 22.5547 10.1875 22.875C10.1875 24.4172 11.4578 25.6875 13 25.6875C14.5422 25.6875 15.8125 24.4172 15.8125 22.875C15.8085 22.5547 15.7489 22.2375 15.6362 21.9375H17.5112L15.6362 20.0625H7.19875C7.30562 19.7691 7.375 19.455 7.375 19.125V11.8004L5.52812 9.98442ZM13 21.9375C13.5278 21.9375 13.9375 22.3482 13.9375 22.875C13.9375 23.4029 13.5269 23.8125 13 23.8125C12.4722 23.8125 12.0625 23.4019 12.0625 22.875C12.0625 22.3472 12.4731 21.9375 13 21.9375Z" fill="white" fill-opacity="0.5"/>
                        </svg>
                        </span> 
                    </p>
                 </div>
                 <div class="col-2  text-white">
                 <Link to="#" class="btn rounded-0 btn shadow-none btn-completed" >Completed</Link>
            </div>
           </div>



           <div class="row my-3 p-3">
            <div class="col-2 text-left">  
      <p class="m-0 p-0">CAT 2</p>
            </div>
            <div class="col-8 text-center">
             <p class="m-0 p-0">22nd Dec 2020
                 <span class="time-f"><svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <circle cx="3.33333" cy="3.5" r="3" fill="white"/>
                 </svg>
                 </span> 9:00 am - 12:00 pm 
                 <span  class="time-f">
                    <svg width="20" height="25" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 0.3125C8.96406 0.3125 8.125 1.15156 8.125 2.1875C8.125 2.26813 8.14375 2.345 8.15406 2.42188C4.91313 3.24969 2.5 6.19344 2.5 9.6875V18.125C2.5 18.6556 2.09312 19.0625 1.5625 19.0625H0.625V20.9375H7.36375C7.25114 21.2374 7.19151 21.5547 7.1875 21.875C7.1875 23.4172 8.45781 24.6875 10 24.6875C11.5422 24.6875 12.8125 23.4172 12.8125 21.875C12.8085 21.5547 12.7489 21.2374 12.6363 20.9375H19.375V19.0625H18.4375C17.9069 19.0625 17.5 18.6556 17.5 18.125V9.95094C17.5 6.42781 15.145 3.28531 11.8459 2.42188C11.8562 2.345 11.875 2.26813 11.875 2.1875C11.875 1.15156 11.0359 0.3125 10 0.3125ZM9.58938 4.0625C9.72531 4.05125 9.86125 4.0625 10 4.0625H10.1762C13.2372 4.15438 15.625 6.8375 15.625 9.95094V18.125C15.625 18.455 15.6944 18.7663 15.8012 19.0625H4.19969C4.31197 18.7625 4.37129 18.4453 4.375 18.125V9.6875C4.37232 8.26432 4.90877 6.89294 5.87639 5.84931C6.84401 4.80567 8.17099 4.16725 9.59031 4.0625H9.58938ZM10 20.9375C10.5278 20.9375 10.9375 21.3481 10.9375 21.875C10.9375 22.4028 10.5269 22.8125 10 22.8125C9.47219 22.8125 9.0625 22.4019 9.0625 21.875C9.0625 21.3472 9.47313 20.9375 10 20.9375Z" fill="white"/>
                        </svg>                        
                     </span> 
                 </p>
              </div>
              <div class="col-2  text-white text-end">
              <Link to="/check" replace class="btn rounded-0 btn shadow-none btn-join-exam" >Join Exam</Link>
         </div>
        </div>


        <div class="row my-3 p-3">
            <div class="col-2 text-left">  
      <p class="m-0 p-0">LAB FAT</p>
            </div>
            <div class="col-8 text-center">
             <p class="m-0 p-0">22nd Dec 2020
                 <span class="time-f"><svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <circle cx="3.33333" cy="3.5" r="3" fill="white"/>
                 </svg>
                 </span> 9:00 am - 12:00 pm 
                 <span  class="time-f">
                    <svg width="20" height="25" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 0.3125C8.96406 0.3125 8.125 1.15156 8.125 2.1875C8.125 2.26813 8.14375 2.345 8.15406 2.42188C4.91313 3.24969 2.5 6.19344 2.5 9.6875V18.125C2.5 18.6556 2.09312 19.0625 1.5625 19.0625H0.625V20.9375H7.36375C7.25114 21.2374 7.19151 21.5547 7.1875 21.875C7.1875 23.4172 8.45781 24.6875 10 24.6875C11.5422 24.6875 12.8125 23.4172 12.8125 21.875C12.8085 21.5547 12.7489 21.2374 12.6363 20.9375H19.375V19.0625H18.4375C17.9069 19.0625 17.5 18.6556 17.5 18.125V9.95094C17.5 6.42781 15.145 3.28531 11.8459 2.42188C11.8562 2.345 11.875 2.26813 11.875 2.1875C11.875 1.15156 11.0359 0.3125 10 0.3125ZM9.58938 4.0625C9.72531 4.05125 9.86125 4.0625 10 4.0625H10.1762C13.2372 4.15438 15.625 6.8375 15.625 9.95094V18.125C15.625 18.455 15.6944 18.7663 15.8012 19.0625H4.19969C4.31197 18.7625 4.37129 18.4453 4.375 18.125V9.6875C4.37232 8.26432 4.90877 6.89294 5.87639 5.84931C6.84401 4.80567 8.17099 4.16725 9.59031 4.0625H9.58938ZM10 20.9375C10.5278 20.9375 10.9375 21.3481 10.9375 21.875C10.9375 22.4028 10.5269 22.8125 10 22.8125C9.47219 22.8125 9.0625 22.4019 9.0625 21.875C9.0625 21.3472 9.47313 20.9375 10 20.9375Z" fill="white"/>
                        </svg>                        
                     </span> 
                 </p>
              </div>
              <div class="col-2  text-white text-end">
              <Link to="#" class="btn rounded-0 btn shadow-none btn-join-exam btn-completed" >Yet to start</Link>
         </div>
        </div>


       </div>
 </div>



      </div>
    </div>


  </div>











  
  <div class="row bottom-text w-100 m-0 p-0 max-auto text-white px-5">
    <div class="col text-left ps-5 ms-3"> <Link to="" > <p class="text-white"><u>Take Demo Exam</u></p></Link></div>
    <div class="col">
    <p class="pro-end ms-auto">  <Link to="/settings" replace class="text-white">
        <span class="name">Samuel Doe</span>
        <br/>
        <span class="span-n-check"> 18BIS1241</span>
        <img src={liveimg} class="img-p-check" alt="" srcset=""/>
  
</Link>  </p>
</div>
</div>
</section>



    </>
    )
}  export default Dashboard;

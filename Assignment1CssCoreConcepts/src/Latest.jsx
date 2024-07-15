import drone1 from './assets/drone1.jpg'
import drone2 from './assets/drone2.jpg'
import drone3 from './assets/drone3.jpg'
import drone4 from './assets/drone4.jpg'

function Latest(){

          return(
               <body>

              <div className="relative h-screen w-screen bg-zinc-100 bg-cover bg-center  "
              >
               <div className='flex p-12 items-center justify-center  m-100 bg-zinc-100 shadow-lg rounded-lg'>
                  <div className='flex flex-col space-y-12' > 
                             <h1 className='text-4xl text-center font-bold text-black text-4xl '>LATEST ARTICLES</h1>
                              
                             <div class="  flex place-items-center justify-center ">
                    
                                      <div class="justify-center self-center w-2/5 h-1 bg-stone-950 "></div>  
                 
                            </div>          
                  </div>
                   
                  
               </div>
               <div className="flex flex-row items-center justify-center bg-zinc-100 p-20 space-x-10 ">
                          <div className="pb-16  bg-white shadow-lg mb-10 space-y-10">
                                          <img
                                             src={drone1}
                                             alt="Example Image"
                                             className=" h-64 w-full object-cover"
                                          />
                   <div class="  flex place-items-center justify-center ">
                    
                        <div class="justify-center self-center w-16 h-1 bg-stone-950 "></div>  

                  </div> 
                                
                              <h1 className="justify-self-center px-12 text-center">How to automate surveilance drones</h1>
                           </div>
                           <div className="pb-16  bg-white shadow-lg mb-10 space-y-10">
                                         <img
                                             src={drone2}
                                             alt="Example Image"
                                             className=" h-64 w-full object-cover"
                                          />
                            <div class="  flex place-items-center justify-center ">
                    
                                 <div class="justify-center self-center w-16 h-1 bg-stone-950 "></div>  

                              </div>
                                
                              <h1 className=" justify-self-center px-12 text-center">Robotics and Artificial Intelligence</h1>
                           </div>
                           <div className="pb-16  bg-white shadow-lg mb-10 space-y-10">
                                              <img
                                             src={drone3}
                                             alt="Example Image"
                                             className=" h-64 w-full object-cover"
                                          />
                     <div class="  flex place-items-center justify-center ">
                    
                        <div class="justify-center self-center w-16 h-1 bg-stone-950 "></div>  

                     </div>
                          
                              <h1 className="justify-self-center px-8 text-center">Improving Lives through Robotics Prosthetics</h1>
                           </div>
                           <div className="pb-16  bg-white shadow-lg mb-10 space-y-10">
                                             <img
                                             src={drone4}
                                             alt="Example Image"
                                             className="h-64 w-full object-cover"
                                          /> 
                    <div class="  flex place-items-center justify-center ">
                    
                                <div class="justify-center self-center w-16 h-1 bg-stone-950 "></div>  

                    </div>
                              
                              <h1 className="justify-self-center px-12 text-center">Power of Robotics in Agriculture</h1>
                           </div>
               </div>
               </div>   
               </body>


          );


}
export default Latest
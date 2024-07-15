import drone5 from './assets/drone5.jpg'

function About(){

            return(
              
                    <div className="flex  bg-gray-100  ">
                        <div className=" h-screen w- screen flex   bg-white space-x-0  ">                          
                                <img
                                   src={drone5}
                                   alt="Example Image"
                                   className=" top-50 left-0 w-1/2 h-auto object-cover"
                                />
                            <div className=' bg-white-100  self-center  '>
                              <div className='flex flex-col   bg-center space-y-12' > 
                                     <h1 className='text-3xl text-center font-bold text-black text-4xl'>ABOUT US</h1>
                                     <h1 className='text-1xl text-center font-bold text-black text-3xl'>________</h1>   
                                     <h1 className="text-center object-center px-20 ">Welcome to our dronoticz, where innovation and technology converge to shape
                                        the future. We revolutionize industries and improve lives worldwide through our passion for pushing
                                        the boundaries of what robots can do. With expertise in AI, computer vision, mechanical engineering, and automation
                                        , we lead the way in the robotics revolution. Our brilliant team creates intelligent machines that seamlessly 
                                        integrate into daily life, enhancing productivity, safety, and efficiency. Join us on this exciting journey as 
                                        we unlock new frontiers, solve complex challenges, and shape a future where intelligent machines work hand-in-hand
                                         with humans. Discover the power of robotics and be part of the revolution.</h1>        
                                </div>                 
                            </div>
                        </div>
                      </div>
               
               

            );
}
export default About
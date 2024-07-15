import facebook_icon from './assets/facebook_icon.jpg'
import linked_icon from './assets/linked_icon.jpg'
import pic_icon from './assets/pic_icon.jpg'


function Footer(){

       return(


        <div className="flex bg-white   ">
            
                   <div className=" flex p-10  bg-white space-x-14  ">  
                         <img
                                             src={facebook_icon}
                                             alt="face"
                                             className=" h-12 w-12 object-cover"
                          />
                          <img
                                             src={linked_icon}
                                             alt="linked- icon"
                                             className=" h-12 w-12 object-cover"
                          />
                          <img
                                             src={pic_icon}
                                             alt="pictre"
                                             className=" h-12 w-12 object-cover"
                          />
                     
                    </div> 
                  
                    <div className=" flex p-10  bg-white space-x-24 ml-auto ">   
                        <h1 className='text-l text-center  text-black '>ABOUT US</h1>  
                        <h1 className='text-l text-center  text-black '>ARTICLES</h1>  
                        <button className='h-8 w-36 ring ring-slate-950'>SUBSCRIBE</button>
                    </div> 
                   
        </div>

       );
}

export default Footer
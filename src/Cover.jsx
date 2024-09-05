

function Cover(){

   return(
        <header className='flex  text-white bg-cover   '  >
            
            <div className=' flex flex-initial  container mx-auto  place-self-center py-9 ps-8 justify-between ' >
             <div className='flex justify-items-start  '>
            
                 <h1 className='text-4xl font-bold font-mono text-zinc-100'>Christian Bible</h1>
            </div>   
            
            <nav    className=' justify-items-center'>
                <ul  className='flex space-x-20' > 
                    <a href="" className='text-1xl text-zinc-100 hover:text-2xl'>
                   ABOUT
                    </a>

                 <a href="" className='text-1xl  text-zinc-100 hover:text-2xl'>
                    ARTICLES  
                 </a>
                 <button className="h-8 w-36  text-white ring-1 ring-gray-500 hover:bg-gray-900">
          SUBSCRIBE
        </button>
                </ul>             
               
            </nav>
           
            </div>
            
            
        </header>
        
   );
}
export default Cover
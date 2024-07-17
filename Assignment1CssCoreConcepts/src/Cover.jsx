

function Cover(){

   return(
        <header className='flex  text-white bg-cover   '  >
            
            <div className=' flex flex-initial  flex container mx-auto flex place-self-center py-9 ps-8 justify-between ' >
             <div className='flex justify-items-start  '>
                 <h1 className='text-4xl font-bold font-mono text-slate-950' >D</h1>
                 <h1 className='text-4xl font-bold font-mono text-zinc-100'>Z</h1>
            </div>   
            
            <nav    className=' justify-items-center'>
                <ul  className='flex space-x-20' >
                <label className='text-1xl text-slate-950'>ABOUT</label>
                <label className='text-1xl text-slate-950'>ARTICLES</label>                
                </ul>             
            </nav>
            <div className='  pe-12'>
                  <button className='justify-items-end h-8 w-36 ring ring-slate-950  text-1xl text-slate-950'>SUBSCRIBE</button>
            </div>
               
            </div>
            
            
        </header>
        
   );
}
export default Cover
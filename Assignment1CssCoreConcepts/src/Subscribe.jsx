function Subscribe(){

       return(

        <div className='flex items-center justify-center h-1/2 m-100 bg-zinc-100 bg-stone-100 shadow-lg rounded-lg'>
        <div className='flex flex-col space-y-7 self-center py-10  '  > 
                   <h1 className='text-4xl text-center  text-black text-1xl'>SUBSCRIBE</h1>
                   <h1 className='text-l text-center  text-black '>Sign-up to our newsletter</h1>  
                   <textarea className=' px-8 h-70 w-96 bg-white     ' readonly disabled>Your email </textarea>   
                   
                   <button className='self-center bg-gray-100 h-10 w-40 outline-black ring ring-slate-950' >SUBMIT</button>     
        </div>
         
        
     </div>

       );

}

export default Subscribe
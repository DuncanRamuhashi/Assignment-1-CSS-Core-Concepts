import mainDrone from './assets/mainDrone.jpg'


function  Display(){

  return(
     <body >

             <div className='flex flex-col h-screen items-center justify-center py-10 px-4'>
                <div className='p-6 sm:p-8 space-y-6 sm:space-y-10   shadow-md'>
                   <h1 className='text-4xl text-center sm:text-6xl md:text-9xl font-medium text-zinc-200'>The Word of God</h1>
               <h1 className='text-2xl sm:text-3xl md:text-4xl text-center text-zinc-200'>Heaven and earth will pass away, but my words will never pass away.</h1>

                    <div className='flex items-center justify-center'>
              <div className='w-1/4 sm:w-1/6 h-1  '></div>
              </div>
             </div>
            </div>

     </body>
  );
} 

export default Display
import mainDrone from './assets/mainDrone.jpg'


function  Display(){

  return(
     <body >

             <div className='flex flex-col items-center justify-center py-10 px-4'>
  <div className='p-6 sm:p-8 space-y-6 sm:space-y-10 rounded-lg  shadow-md'>
    <h1 className='text-4xl sm:text-6xl md:text-9xl font-medium text-black text-center'>DRONOTICZ</h1>
    <h1 className='text-2xl sm:text-3xl md:text-4xl text-center text-black'>THE ERA OF DRONES</h1>

    <div className='flex items-center justify-center'>
      <div className='w-1/4 sm:w-1/6 h-1  '></div>
    </div>
  </div>
</div>

     </body>
  );
} 

export default Display
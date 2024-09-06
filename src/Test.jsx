import mainDrone from './assets/mainDrone.jpg';
import Cover from './Cover';
import Display from './Display';
import biblePhoto from './assets/bibleCover.jpg'
function Test(){
             
    return(

     
         <div
              className="relative h-full  bg-cover bg-center "
              style={{ backgroundImage: `url(${biblePhoto})` }}
         >
              <Cover/>
              <Display/>
        </div>
    
    );

}
export default Test
import mainDrone from './assets/mainDrone.jpg';
import Cover from './Cover';
import Display from './Display';
function Test(){
             
    return(

     <div className="relative h-screen w-screen">
         <div
              className="relative h-screen w-screen bg-cover bg-center rounded-lg"
              style={{ backgroundImage: `url(${mainDrone})` }}
         >
              <Cover/>
              <Display/>
        </div>
     </div>
    );

}
export default Test
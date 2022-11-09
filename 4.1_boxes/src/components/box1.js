import './box1.css' 
import Box2 from './box2';

function Box1(){
   return (
      <div className="box1">
         box1
         <Box2 />
      </div>
   )
}
export default Box1;
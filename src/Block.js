import './Block.css';
import ButtonLayout from './ButtonLayout';
import Image_Profile from "./img/IMG_4030.jpg"

function Block() {
  return (
    <div className="Block">
       <div className="lb">
        <img src = {Image_Profile} width="241" height="338" />
       </div>
       <div className="rb">

          <h4> About Me </h4>

          <p>
          Hello, I'm James. I'm a sophomore studying Computer Science and Music at the University of Pennsylvania (co2025). 
          I'm interested in the capabilities of computers, the way music makes you feel, and the intersection between those two. 
          I love music, lifting, and exploring new places. I also like to eat. Nom nom.
          </p>

          <br/>

          <ButtonLayout />

       </div>
    </div>
  );
}

export default Block;

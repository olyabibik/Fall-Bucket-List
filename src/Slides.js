import { useState } from 'react';
import { dataSlides } from './dataSlides';
import './App.css';

function Slides(){
const [recepy, setRecepy] = useState(0);
const {id, heading, image, text } = dataSlides[recepy];

const previousRecepy=()=> {
    setRecepy((recepy => {
        recepy--;
        if (recepy < 0) {
            return dataSlides.length-1;
        }
        return recepy;
    }))
}

const nextRecepy=()=> {
    setRecepy((recepy => {
        recepy++;
        if (recepy > dataSlides.length-1) {
            recepy=0;
        }
        return recepy;
    }))
}

    return(<div>
        <div className="container">
            <img src={image} width="300px" alt="pie"/>   
        </div>

        <div className="container">
            <h3> {heading}</h3>  
        </div>

        <div className="container">
           <p>{text}</p>  
        </div>

        <div className="container btnCont">
            <button className="btn2" onClick={previousRecepy}>Previous</button> 
            <button className="btn2" onClick={nextRecepy}>Next</button>  
        </div>
      </div>
    )
}
export default Slides;
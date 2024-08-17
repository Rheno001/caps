import { useState } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function Carousel({slides}) {
    

    let [current, setCurrent] = useState(0);

    let previousSlide = () =>{
        if(current===0) setCurrent(slides.length - 1);
        else setCurrent(current - 1);
    };
    let nextSlide = () =>{
        if(current === slides.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    };
    return ( 
    <div className="overflow-hidden relative">
      <div className={`flex transition ease-in-out duration-400`}
      style={{transform: `translateX(-${current * 100}%)`,}}>

        {slides.map((s)=>{
            return <img src={s} />;
        })}
       </div>

       <div className="absolute px-5 top-0 h-full w-full justify-between flex text-white text-3xl items-center">
        <button onClick={previousSlide}>
        <FaArrowAltCircleLeft />
        </button>
        <button onClick={nextSlide}>
        <FaArrowAltCircleRight />
        </button>
       </div>
    </div>
    
    );
}
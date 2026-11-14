import { imgs } from "../../constants";
import "./styles.css"
import { useEffect, useState } from "react";


export default function Slider(){  
    const [percent, setPercent] = useState(0)

    useEffect(() => {

        const slide = document.querySelectorAll(".slide");

         if(percent === -300)
            setPercent(0);
         if(percent === 100)
            setPercent(0);
        
         slide.forEach(element => element.style.transform = `translateX(${percent}%)`);
    }, [percent])

    return (
        <div className="slider">
            <div className="slider-wrapper">
                {imgs.map(img => (
                  <div key={img.id} id={img.id} className="slide">
                    <img fetchPriority="high" src={img.src} ></img>
                  </div> 
                ))}
            </div>
            <button onClick={() => setPercent(percent - 100)} className="slider-next">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><title>right-line</title><path fill="currentColor" d="m13.586 12l-4.95-4.95c-.574-.654-.22-1.707.707-1.707c.278 0 .503.114.707.293l5.657 5.657c.179.204.293.429.293.707s-.114.503-.293.707l-5.657 5.657c-.339.298-.8.394-1.207.159c-.588-.34-.629-1.092-.207-1.573Z"/></svg>
            </button>
            <button onClick={() => setPercent(percent + 100)} className="slider-prev">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><title>left-line</title><path fill="currentColor" d="m10.414 12l4.95 4.95c.422.481.381 1.233-.207 1.573c-.407.235-.868.139-1.207-.159l-5.657-5.657C8.114 12.503 8 12.278 8 12s.114-.503.293-.707l5.657-5.657c.204-.179.429-.293.707-.293c.927 0 1.281 1.053.707 1.707Z"/></svg>
            </button>
        </div>
    );
            

 }
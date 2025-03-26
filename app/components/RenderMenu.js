import React, {useEffect, useState, useRef, forwardRef} from 'react'

export default function RenderMenu(itemRef, props) {
    const tempArr = [false, false, false, false, true];
    useEffect(() =>{
        const observer = new IntersectionObserver((entires) =>{
          tempArr[2] = entires[0].isIntersecting;
            console.log("loaded")
             
        });
        observer.observe(itemRef.current);
      }, []);
/*       console.log(sideMenu);
 */
return tempArr;
}

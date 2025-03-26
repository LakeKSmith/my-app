import React, {useRef, useEffect, forwardRef} from 'react'

const Resume = (ref) => {

  return (
    <div  id='resume' className='gap-6 h-screen w-full flex snap-center'>
      <div ref={ref.resumeRef} className="h-3/4 lg:w-3/4 md:w-3/5 shadow-xl bg-blue-950 text-gray-400 p-4 lg:ml-32 md:ml-20 sm:ml-10 lg:mr-56 md:mr-20 sm:mr-10 mt-28 m-2 flex-shrink overflow-y-auto rounded-xl">
      
        <a href="../../assets/Lake's Working Resume.docx" download="../../assets/Lake's Working Resume.docx">Download my Resume</a>
      </div>
    </div>
  )
};

export default Resume
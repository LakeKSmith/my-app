import React, {forwardRef} from 'react'

const Experience = (ref) => {
  return (
    <div  id='experience' className='gap-6 h-screen w-full flex snap-center'>
      <div ref={ref.experienceRef} className="h-3/4 lg:w-3/4 md:w-3/5 shadow-xl bg-blue-950 text-gray-400 p-4 lg:ml-32 md:ml-20 sm:ml-10 lg:mr-56 md:mr-20 sm:mr-10 mt-28 m-2 flex-shrink overflow-y-auto rounded-xl">
      
      </div>
    </div>
  )
};

export default Experience
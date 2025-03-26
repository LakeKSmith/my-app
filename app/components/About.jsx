import React, {forwardRef,useRef} from 'react'
import clsx from  'clsx'

const About = (ref) => {
  
  return (
    <div  id='about' className='gap-6 h-screen w-full flex snap-center'>
      <div ref={ref.aboutRef} className="h-3/4 lg:w-3/4 md:w-3/5 shadow-xl bg-blue-950 text-gray-400 p-4 lg:ml-32 md:ml-20 sm:ml-10 lg:mr-56 md:mr-20 sm:mr-10 mt-28 m-2 flex-shrink overflow-y-auto rounded-xl">
      {/* Info section */}
          <h1>Personal Sumary</h1>
          <div>
            When given the best tools to solve a new problem, many people declare an impossibility when the tools fail, but I see an opportunity to not only use those tools, but bend the very fabric of them to discover new answers.  As a software engineer at the beginning of my career, I am always eager to find problems that I not only get to solve, but that hurt a little in the process.  This is driven by my desire to constantly grow both in my professional and personal life.  I am a creative and very people-oriented person.  I have a strong belief that even though working smarter not harder is always the best path to a more efficient solution, it is not a guarantee that doing things the right way is supposed to be easy.
          </div>
        </div>
    </div>
  )
};

export default About
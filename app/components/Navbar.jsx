import React, {useState, useEffect, useRef} from 'react'
import Image from 'next/image'
import {assets} from '../../assets/assets'
import clsx from  'clsx'

const Navbar = ({sideMenu,inputRef}) =>{


    /* Opend and closes side menu */
    const [hideMenu, showMenu] = useState(false);
    function displayMenu(boolean){
        if(boolean == true){
            showMenu(true);
        }else{        
            showMenu(false);
        }
    }

    return(
        //------------------navbar------------------------
        
        <div ref={inputRef} id="top" className=" top-0 h-screen w-full snap-start ">
            
            {/* Navbar */}

            <div >
            
                
                {/*Profile Picture */}
                <div   className="absolute w-2/3 h-full-10 overflow-hidden pl-10 bottom-10 top-10">
                    <div  className="scale rounded-full shadow-md ">
                        <Image  src={assets.Prof_pic} alt='' className=""/>
                    </div>
                </div>

                {/* List of pages */}
                <div className="hidden md:block fixed top-0 right-0  w-40 h-160 shadow-md justify-stretch overflow-y-auto">
                    <a  className={clsx("group flex w-full h-32",sideMenu[0] ? 'shadow-xl' : 'shadow hover:shadow-xl')} href='#top'>
                        <div className={clsx(sideMenu[0] ? '' : 'hidden',"absolute group-hover:block bg-orange-400 w-2 h-32")}  ></div>
                        <div className={clsx(sideMenu[0] ? 'text-orange-100' : 'text-gray-400 group-hover:text-orange-100',"grid-3 content-center h-full w-full")}>
                            <div className={clsx(sideMenu[0] ? 'bg-orange-400' : 'group-hover:bg-orange-400 bg-orange-100',"rounded-full h-8 w-8  justify-self-center")}></div>
                            <div className='justify-self-center'>Home</div>
                        </div>
                    </a>
                    <a  className={clsx("group flex w-full h-32",sideMenu[1] ? 'shadow-xl' : 'shadow hover:shadow-xl')} href='#about'>
                        <div className={clsx(sideMenu[1] ? '' : 'hidden',"absolute group-hover:block bg-orange-400 w-2 h-32")}  ></div>
                        <div className={clsx(sideMenu[1] ? 'text-orange-100' : 'text-gray-400 group-hover:text-orange-100',"grid-3 content-center h-full w-full")}>
                            <div className={clsx(sideMenu[1] ? 'bg-orange-400' : 'group-hover:bg-orange-400 bg-orange-100',"rounded-full h-8 w-8  justify-self-center")}></div>
                            <div className='justify-self-center'>About Me</div>
                        </div>
                    </a>
                    <a  className={clsx("group flex w-full h-32",sideMenu[2] ? 'shadow-xl' : 'shadow hover:shadow-xl')} href='#resume'>
                        <div className={clsx(sideMenu[2] ? '' : 'hidden',"absolute group-hover:block bg-orange-400 w-2 h-32")}  ></div>
                        <div className={clsx(sideMenu[2] ? 'text-orange-100' : 'text-gray-400 group-hover:text-orange-100'," grid-3 content-center h-full w-full")}>
                            <div className={clsx(sideMenu[2] ? 'bg-orange-400' : 'group-hover:bg-orange-400 bg-orange-100',"rounded-full h-8 w-8  justify-self-center")}></div>
                            <div className='justify-self-center'>Resume</div>
                        </div>
                    </a>
                    {/* <a  className={clsx("group flex w-full h-32",sideMenu[3] ? 'shadow-xl' : 'shadow hover:shadow-xl')} href='#experience'>
                        <div className={clsx(sideMenu[3] ? '' : 'hidden',"absolute group-hover:block bg-orange-400 w-2 h-32")}  ></div>
                        <div className={clsx(sideMenu[3] ? '' : 'text-gray-400 group-hover:text-black',"grid-3 content-center h-full w-full")}>
                            <div className={clsx(sideMenu[3] ? 'bg-orange-400' : 'group-hover:bg-orange-400 bg-orange-100',"rounded-full h-8 w-8  justify-self-center")}></div>
                            <div className='justify-self-center'>Portfolio</div>
                        </div>
                    </a> */}
                    <a  className={clsx("group flex w-full h-32",sideMenu[4] ? 'shadow-xl' : 'shadow hover:shadow-xl')} href='#contact'>
                        <div className={clsx(sideMenu[4] ? '' : 'hidden',"absolute group-hover:block bg-orange-400 w-2 h-32")}  ></div>
                        <div className={clsx(sideMenu[4] ? 'text-orange-100' : 'text-gray-400 group-hover:text-orange-100',"grid-3 content-center h-full w-full")}>
                            <div className={clsx(sideMenu[4] ? 'bg-orange-400' : 'group-hover:bg-orange-400 bg-orange-100',"rounded-full h-8 w-8  justify-self-center")}></div>
                            <div className='justify-self-center'>Contact Me</div>
                        </div>
                    </a>
                   
                </div>
                
                {/* MENU BUTTON */}
                
                <div className={clsx(hideMenu ? 'hidden' : '',"fixed right-0 top-0")}>
                    <button id= "menuButton" onClick={() => displayMenu(true)}  className='md:hidden gap-6 lg:gap-8 rounded-full px-12 py-3 bg-gray-200 shadow-sm bg-opacity-50'>
                        menu
                    </button>
                </div>

            </div>
           
            {/* dims background for side menu*/}
            <div className={clsx(hideMenu ? '' : 'hidden',"fixed bg-black opacity-50 top-0 h-screen w-full")}></div>


            {/* Hidden Side menu */}
            <div id='sideMenu' className={clsx(hideMenu ? 'right-0' : '-right-1/2', ' lg:hidden fixed top-0 h-screen w-40 bg-gray-300 pb-50 bg-opacity-80 transition-all')}>
                {/* close side menu */}
                <button  onClick={() => displayMenu(false)} className={clsx(hideMenu ? 'right-0' : '-right-1/2',"-right-1/2 fixed top-0 transition-all")}>
                    X
                </button>
                {/* list of pages */}
                <div className='grid content-center'>
                    <a onClick={() => displayMenu(false)} className="hover:bg-gray-700 " href='#top'>Home</a>
                    <a onClick={() => displayMenu(false)} className="hover:bg-gray-700 " href='#about'>About me</a>
                    <a onClick={() => displayMenu(false)} className="hover:bg-gray-700 " href='#resume'>Resume</a>
                    <a onClick={() => displayMenu(false)} className="hover:bg-gray-700 " href='#experience'>Education</a>
                    <a onClick={() => displayMenu(false)} className="hover:bg-gray-700 " href='#contact'>Profetional experince</a>
                </div>
            </div>

            <div className="item-center gap-6 lg:gap-8 rounded-xl m-2 px-12 py-3 h-screen p-2 flex flex-wrap content-center">
            </div>

            
        
        </div>
        
    )
};





export default Navbar
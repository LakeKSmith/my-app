'use client';
import React, {useState}  from 'react'
import Image from 'next/image'
import {assets} from '@/assets/assets'
import clsx from  'clsx'

const Navbar = () =>{

    const [hideMenu, showMenu] = useState("hidden");
    const [showButton, hideButton] = useState("md:hidden");
    const [smallProf, bigProf] = useState("h-48 w-48");
    const [profLeft, profCenter] = useState("absolute left-0 top-0 pl-5 pt-5");
    const [dontClose, close] = useState("hidden");
    const [screen, dimScreen] = useState("hidden");


    
    function displayMenu(boolean){
        if(boolean == true){
            showMenu("");
            hideButton("hidden");
        }else{
            showMenu("hidden");
            hideButton("md:hidden");
        }
    }

    function frontNCenter(boolean){
        if(boolean == true){
            bigProf("h-50 w-50");
        }else{
            bigProf("h-48 w-48");
        }
    }

    return(
        //------------------navbar------------------------
        
        <div  id='top'>
            
            {/* Navbar */}
            <div className="relative pb-300 h-100 w-full flex justify-center">
                
                {/* Interactive Profile Picture */}
                <button onClick={() => frontNCenter(true)} className={profLeft}>
                    <button onClick={() => frontNCenter(false)} className={clsx(dontClose,"top-0 left-0")}>X</button>
                    <Image  src={assets.Prof_pic} alt='' className={clsx('rounded-full',smallProf,'shadow-md')}/>
                </button>
                
                {/* List of pages */}
                <div className="hidden md:flex justify-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-gray-200 
                                shadow-sm bg-opacity-50">
                    <a className="hover:bg-gray-300 " href='#about'>About me</a>
                    <a className="hover:bg-gray-300 " href='#resume'>Resume</a>
                    <a className="hover:bg-gray-300 " href='#school'>Education</a>
                    <a className="hover:bg-gray-300 " href='#jobs'>Profetional experince</a>
                </div>
                
                {/* Menu Button */}
                <div className={clsx("flex ", showButton,"fixed right-0 top-0")}>
                    <button id= "menuButton" onClick={() => displayMenu(true)}  className='gap-6 lg:gap-8 rounded-full px-12 py-3 bg-gray-200 shadow-sm bg-opacity-50'>
                        menu Button
                    </button>
                </div>

            </div>

            {/* Hidden Side menu */}
            <div id='sideMenu' className= {clsx(hideMenu,"fixed top-0 right-0 h-screen w-1/2 bg-gray-800 pb-50 bg-opacity-80")}>
                {/* close side menu */}
                <button onClick={() => displayMenu(false)} className="top-0 right-0">
                    X
                </button>
                <ul className='flex justify-center-collumn'>
                    <a className="hover:bg-gray-700 " href='#about'>About me</a>
                    <a className="hover:bg-gray-700 " href='#resume'>Resume</a>
                    <a className="hover:bg-gray-700 " href='#school'>Education</a>
                    <a className="hover:bg-gray-700 " href='#jobs'>Profetional experince</a>
                </ul>
            </div>

            {/* Info section */}
            <div className="item-center gap-6 lg:gap-8 rounded-xl m-2 px-12 py-3 h-screen p-2 bg-gray-600 flex flex-wrap content-center">
            
            </div>

        </div>
    )
};





export default Navbar
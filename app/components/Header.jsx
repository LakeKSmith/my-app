import React from 'react'

const Header = () =>{
    return(
        <div id='top' className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
            {/*-------------------- Nav Bar --------------------*/}
            <div className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
                <li><a href='#about'>About me</a></li>
                <li><a href='#resume'>Resume</a></li>
                <li><a href='#school'>Education</a></li>
                <li><a href='#jobs'>Profetional experince</a></li>
            </div>

        </div>
    )
};

export default Header
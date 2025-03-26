'use client';
import {useRef, useEffect, useState} from 'react';
import { useInView } from 'react-intersection-observer';
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

export default function Home() {
  const [sideMenu, highlightMenu] = useState([false, false, false, false, false]);
 
  
  const [headerRef, headerInView] = useInView({threshold: 1});
    useEffect(() =>{
      if(headerInView == true){
        const tempArr = [false, false, false, false, false];
        tempArr[0] = true;
        highlightMenu(tempArr);
        console.log("tempArr");
      }
    },[headerInView])
  
  const [aboutRef, aboutInView] = useInView({threshold: 1});
    useEffect(() =>{
      if(aboutInView == true){
        const tempArr = [false, false, false, false, false];
        tempArr[1] = true;
        highlightMenu(tempArr);
      }
    },[aboutInView])

  const [resumeRef, resumeInView] = useInView({threshold: 1});
    useEffect(() =>{
      if(resumeInView == true){
        const tempArr = [false, false, false, false, false];
        tempArr[2] = true;
        highlightMenu(tempArr);
      }
    },[resumeInView])

  const [experienceRef, experienceInView] = useInView({threshold: 1});
    useEffect(() =>{
      if(experienceInView == true){
        const tempArr = [false, false, false, false, false];
        tempArr[3] = true;
        highlightMenu(tempArr);
      }
    },[experienceInView])

  const [contactRef, contactInView] = useInView({threshold: 1});
    useEffect(() =>{
      if(contactInView == true){
        const tempArr = [false, false, false, false, false];
        tempArr[4] = true;
        highlightMenu(tempArr);
      }
    },[contactInView])
  

  return (
    <>
      <Navbar
        inputRef={headerRef} sideMenu={sideMenu}  
      />
      <About
        aboutRef={aboutRef}
      />
      <Resume
        resumeRef={resumeRef}      
      />
      {/* <Experience
        experienceRef={experienceRef}      
      /> */}
      <Contact
        contactRef={contactRef}      
      />
      
    </>
  );
}

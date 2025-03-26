import Image from "next/image";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Credentials from "./components/Credentials";
import Background from "./components/Background";
import Resume from "./components/Resume";


export default function Home() {
  return (
    <>
      <Navbar/>
      <About/>
      <Resume/>
      <Credentials/>
      <Background/>
    </>
  );
}

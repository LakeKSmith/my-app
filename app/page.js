import Image from "next/image";
import Header from "./components/Header";
import About from "./components/About";
import Credentials from "./components/Credentials";
import Background from "./components/Background";
import Resume from "./components/Resume";


export default function Home() {
  return (
    <>
      <Header/>
      <About/>
      <Credentials/>
      <Background/>
      <Resume/>
    </>
  );
}

import Image from "next/image";
import Header from "./componenets/Header";
import About from "./componenets/About";
import Credentials from "./componenets/Credentials";
import Background from "./componenets/Background";
import Resume from "./componenets/Resume";


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

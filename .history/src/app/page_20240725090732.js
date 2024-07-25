import Image from "next/image";
import Footer from "./_components/Footer";
import Header from "./_components/Header";

export default function Home() {
  return (
   <main className="bg-grey-800 ">
    <Header/>
    <div className="h-screen w-screen flex justify-center"> Hero section</div>
    <Footer/>
    
    
   </main>
  );
}

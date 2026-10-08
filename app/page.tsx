import Image from "next/image";
import Navbar from "./Components/navbar";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Navbar></Navbar>
        <p>Welcome to the Church of Shum</p>
        <Image
          className="dark:invert hover:bg-cyan-300 "
          src="/shumHIMSELF.png"
          alt="image of the Shum"
          width={100}
          height={200}
          priority
        />
        
        
        
      </main>
    </div>
  );
}

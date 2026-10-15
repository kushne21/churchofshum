import Image from "next/image";
import { InputBox } from "./boxes";

export default function Navbar() {
  return (
    <div className=" mb-10">
        <nav className="flex flex-row bg-box p-2 mb-2 ">
        <a href="./"><h1 className="text-5xl">Church of Shum</h1></a>
        <div className="ml-auto flex gap-2 justify-center items-center text-xl">
            <a href="./"><img src="home_icon.svg" alt="Home"></img></a>
            <a href="./Login">Login</a>
            <a href="./FAQ">FAQ</a>
            Search
        </div>
        
        </nav>
        <nav className="flex flex-row bg-box p-2 gap-2 items-center justify-center text-xl">
            <a href="./Figures">Figures</a>
            <a href="./Scripture">Scripture</a>
            <a href="./Art">Art</a>
            <a href="./Events">Events</a>
            <a href="./Articles">Articles</a>
        </nav>
    </div>
    
  );
}
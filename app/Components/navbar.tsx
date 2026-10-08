import Image from "next/image";

export default function Navbar() {
  return (
    <div className=" mb-10">
        <nav className="flex flex-row bg-box p-2 mb-2 ">
        <h1 className="text-5xl">Church of Shum</h1>
        <div className="ml-auto flex gap-2 justify-center items-center text-xl">
            <a href="./"><img src="home_icon.svg" alt="Home"></img></a>
            <a href="./">Login</a>
            <a href="./FAQ">FAQ</a>
            <a href="./">Search</a>
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
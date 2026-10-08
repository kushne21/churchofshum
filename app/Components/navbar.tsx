import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex flex-row  bg-box p-2 m-10">
      <h1 className="text-4xl">Church of Shum</h1>
      <div className="ml-auto flex gap-2 justify-center items-center">
        <a href="./"><img src="home_icon.svg" alt="Home"></img></a>
        <a href="./">Login</a>
        <a href="./">FAQ</a>
        <a href="./">Search</a>
      </div>
      
    </nav>
  );
}
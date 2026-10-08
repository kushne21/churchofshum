import Image from "next/image";

export default function Shumline() {
  return (
    <div className="bg-box">
        <Image
                  className="dark:invert hover:bg-cyan-300 "
                  src="/shumHIMSELF.png"
                  alt="image of the Shum"
                  width={100}
                  height={200}
                  priority
                />
    </div>
    
  );
}
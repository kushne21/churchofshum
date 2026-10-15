import Image from "next/image";
export default function Art() {
  return (
    <div className="bg-box flex flex-row gap-2 flex-wrap p-2 items-center">
        {
        [...Array(5).keys()].map(key => Shmart(key))
        }
    </div>
  );
}

export function Shmart(num: number){
  let str :string = "/shmart" + String(num) + ".png";
  return(
    <div>
      <Image
          className="dark:invert hover:bg-cyan-300 "
          src={str}
          alt="image of the Shum"
          width={130}
          height={200}
          priority
        />
    </div>
    
   
  );
}

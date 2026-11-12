import Image from "next/image";

export default function Figures() {

  // let myMap = new Map<string, number>({
  //  "Shum" :
  // });
  let jsonString = '{"name": "John", "age": 25}'
  let ShumMap = new Map<string, string[]>(
    [
      ["Shum", ["shumHIMSELF.png", "Shum is the messianic figurehead of Shumblism. He was born 1 million years ago in South America and gifted all the plants in the world Planthood. He is a plant fertility god that makes magical things happen with his Green Finger. \n Shum is the source of all love, greenness, and joy. When you smile, think of Shum."]],
      ["Loba the Lob",["lobathelob.png", "Loba the Lob is the brother of Shum. He is a lobster. He was gifted consciousness and knowledge by Shum but cut off Shum's fluffy tail."]],
      ["Little Noodle", ["littlenoodle.png", "Little Noodle is Shum’s Daughter, the Beloved Prophet. You see Little Noodle every day, all the time, speaking the wisdom of Shum. She was birthed via Shum’s green finger."]]
      ,["The Purple Dissenter", ["", "A man who chose to have purple skin after he dissented from Shum. Shum allowed it and helped him in his purple transition. Since then, skin color has been chosen by way of the earth."]]
      ,["The One Who Created Shum", ["","Created the universe. Certain sects do not believe in this Creator and believe Shum is the creator of shumself. Within the actual Humble Shumble, it is said that Shum created this entity."]]
      ,["Hibby-Sheaf", ["", "A leaf."]]      
      ,["Rat Mama", ["", "September 16th, 2011, a rat was found in what is now “Her Temple” with a bald patch resembling shumflower. The community Little Noodlators (professional translators of the prophet Little Noodle) have found that this event was prophesied 2 decades earlier.  Rat mama released 4 prophesied coughs the tuesday after she was found, curing the owner of the house she resided in of all her ailments."]]
      ,["Sherwin Humble", ["","British anthropologist from the 1700s who “discovered” Shumblism. All his findings were adapted from a language from a land that doesn’t exist."]]
    ]

  );
  return (
    <div className="bg-box p-5">
      {/*  <Image
      className="dark:invert hover:bg-cyan-300 "
                  src="/shumHIMSELF.png"
                  alt="image of the Shum"
                  width={100}
                  height={200}
                  priority></Image> 
      <h1 className="text-4xl">Shum</h1>
      <p>Shum is the messianic central figure of Shublism.</p> */}
      {
        
        [...ShumMap].map(([key, value]) => (
          <>
          <h1 className="text-4xl">{key}</h1>
            <p>{value[1]}</p> 
            <br></br>
            </>

        )

        )
      }
        
    </div>
  );
}

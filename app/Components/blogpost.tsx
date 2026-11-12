import Image from "next/image";

const profilepics = [
    { id: 1, src: '/male.webp', alt: 'male profile pic' },
    { id: 2, src: '/female.webp', alt: 'female profile pic' },
    { id: 3, src: '/animal.webp', alt: 'animal profile pic' },
    { id: 4, src: '/other.webp', alt: 'other profile pic' },
    { id: 5, src: '/none.webp', alt: 'none profile pic' },
];
//have a way for the website to access the user's gender using info about user from browser when logged in
export default function BlogPost(text: string, name: string, date: string) {
    return(
        <div className="flex flex-col">
            <Image  className="min-w-40"
                      src="/shumHIMSELF.png"
                      alt="profile image"
                      width={100}
                      height={100}
            />
            <div className="h-20">
                <div>
                    <h1>
                        {name}
                    </h1>
                    <h2>
                        {date}
                    </h2>
                </div>
                
                <p>
                    {text}
                </p> 
            </div>
            

        </div>
    );
}
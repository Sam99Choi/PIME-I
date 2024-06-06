/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export default function Header() {
    return(
        <header className="flex items-center h-28 4 ">
            <div className="bg-lime-400 flex items-center w-full h-full gap-4 px-5 ">
                <img
                    className="border rounded-full max-h-20"
                    src="https://github.com/Sam99Choi.png" 
                    alt="Descrição da imagem" 
                    width={80} 
                    height={80} 
                />
                <p className="text-lg font-medium">Samuel Choi</p>
            </div>
        </header>
    )
}
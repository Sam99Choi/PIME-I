/* eslint-disable @next/next/no-img-element */

export default function Header() {
    return(
        <header className="static shadow inset-x-0 top-0 flex items-center py-1 md:py-2 bg-lime-400 ">
            <div className=" flex items-center w-full h-full gap-4 px-5 ">
                <img
                    className="border rounded-full max-h-20"
                    src="/profile.png" 
                    alt="Descrição da imagem" 
                    width={70} 
                    height={70} 
                />
                <p className="text-lg font-medium">@User_47</p>
            </div>
        </header>
    )
}




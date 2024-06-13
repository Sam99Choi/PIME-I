/* eslint-disable @next/next/no-img-element */
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";

export default function Amizades() {
  return (
    <div className=" flex flex-col scroll-auto w-auto h-screen ">
      <Header />

      <div className="static md:mt-5 mx:mt-0 mb-10 flex flex-col items-center justify-center w-auto">
        <div className="  mb-5 sm:mb-2  px-3 flex flex-col justify-center rounded-md  scroll-auto sm:border-2 sm:shadow-lg md:w-8/12 lg:w-6/12 xl:w-4/12 pt-5 pb-5 ">
          <h1 className=" w-96 text-lg font-bold semibold">Suas amizades</h1>
          <ol className="flex flex-col /items-center w-full  space-y-5 my-3  ">
            <li className="flex items-center gap-3 p-1 hover:bg-slate-400 rounded-md ">
              <img
                className="border rounded-full max-h-20 "
                src="/vinicius.enc"
                alt="Descrição da imagem"
                width={60}
                height={60}
              />
              Vinícius Ventola
            </li>
            <li className="flex items-center gap-3 p-1 hover:bg-slate-400 rounded-md">
              <img
                className="border rounded-full max-h-20"
                src="/ronnie.jpg"
                alt="Descrição da imagem"
                width={60}
                height={60}
              />
              Ronnie Colleman
            </li>

            <li className="flex items-center gap-3 p-1 hover:bg-slate-400 rounded-md">
              <img
                className="border rounded-full max-h-20"
                src="/schimidt.enc"
                alt="Descrição da imagem"
                width={60}
                height={60}
              />
              Gabriel Schimidt
            </li>
            <li className="flex items-center gap-3 p-1 hover:bg-slate-400 rounded-md">
              <img
                className="border rounded-full max-h-20"
                src="/ramon1.jpg"
                alt="Descrição da imagem"
                width={60}
                height={60}
              />
              Ramon Dino{" "}
            </li>
            <li className="flex items-center gap-3 p-1 hover:bg-slate-400 rounded-md">
              <img
                className="border rounded-full max-h-20 "
                src="/profile.png"
                alt="Descrição da imagem"
                width={60}
                height={60}
              />
              Danilo Santos
            </li>
            <li className="flex items-center gap-3 p-1 hover:bg-slate-400 rounded-md">
              <img
                className="border rounded-full max-h-20"
                src="/serjao2.jpeg"
                alt="Descrição da imagem"
                width={60}
                height={60}
              />
              Serjão dos Foguetes
            </li>
            <li className="flex items-center gap-3 p-1 hover:bg-slate-400 rounded-md">
              <img
                className="border rounded-full max-h-20"
                src="/samuel.enc"
                alt="Descrição da imagem"
                width={60}
                height={60}
              />
              Samuel Choi
            </li>
            <li className="flex items-center gap-3 p-1 hover:bg-slate-400 rounded-md">
              <img
                className="border rounded-full max-h-20"
                src="/profile.png"
                alt="Descrição da imagem"
                width={60}
                height={60}
              />
              Leonardo{" "}
            </li>
          </ol>
        </div>
      </div>

      <Footer />
    </div>
  );
}
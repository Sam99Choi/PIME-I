/* eslint-disable @next/next/no-img-element */
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";

export default function Ranking() {
  return (
    <div className=" flex flex-col scroll-auto w-auto h-screen ">
      <Header />

      <div className="static  md:mt-5 mx:mt-0 sm:pb-10 flex flex-col items-center justify-center w-auto">
        <div className="  mb-4 /sm:mb-3  px-3 flex flex-col justify-center rounded-md scroll-auto sm:border-2 sm:shadow-lg md:w-8/12 lg:w-6/12 xl:w-4/12  pt-5 pb-5 sm:pb-0 ">
          <h1 className=" w-96 px-4 sm:px-0 text-lg font-bold semibold">Ranking</h1>
          <ol className="flex flex-col w-full sm:px-0 px-4  space-y-2 my-3   ">
          <li className="flex items-center gap-3 p-2 bg-slate-300  rounded-md">
          <p className="text-xl font-bold">1º</p>
              <img
                className="border rounded-full max-h-20"
                src="/serjao2.jpeg"
                alt="Descrição da imagem"
                width={60}
                height={60}
              />
              Serjão dos Foguetes
            </li>
            <li className="flex items-center gap-3 p-2  rounded-md">
              <p className="text-xl font-bold">2º</p>
              <img
                className="border rounded-full max-h-20"
                src="/ronnie.jpg"
                alt="Descrição da imagem"
                width={60}
                height={60}
              />
              Ronnie Colleman
            </li>
            <li className="flex items-center gap-3 p-2 bg-slate-300  rounded-md">
            <p className="text-xl font-bold">3º</p>
              <img
                className="border rounded-full max-h-20"
                src="/ramon1.jpg"
                alt="Descrição da imagem"
                width={60}
                height={60}
              />
              Ramon Dino{" "}
            </li>

            <li className="flex items-center gap-3 p-2  rounded-md">
            <p className="text-xl font-bold">4º</p>
              <img
                className="border rounded-full max-h-20"
                src="/schimidt.enc"
                alt="Descrição da imagem"
                width={60}
                height={60}
              />
              Gabriel Schimidt
            </li>

            <li className="flex items-center gap-3 p-2 bg-slate-300  rounded-md">
            <p className="text-xl font-bold">5º</p>
              <img
                className="border rounded-full max-h-20 "
                src="/profile.png"
                alt="Descrição da imagem"
                width={60}
                height={60}
              />
              Danilo Santos
            </li>
            <li className="flex items-center gap-3 p-2  rounded-md">
            <p className="text-xl font-bold">6º</p>
              <img
                className="border rounded-full max-h-20 "
                src="/vinicius.enc"
                alt="Descrição da imagem"
                width={60}
                height={60}
              />
              Vinícius Ventola
            </li>

            <li className="flex items-center gap-3 p-2 bg-slate-300 rounded-md">
            <p className="text-xl font-bold">7º</p>
              <img
                className="border rounded-full max-h-20"
                src="/samuel.enc"
                alt="Descrição da imagem"
                width={60}
                height={60}
              />
              Samuel Choi
            </li>
            <li className="flex items-center gap-3 p-2  rounded-md">
            <p className="text-xl font-bold">8º</p>
              <img
                className="border rounded-full max-h-20"
                src="/profile.png"
                alt="Descrição da imagem"
                width={60}
                height={60}
              />
              Leonardo Dos Santos{" "}
            </li>
          </ol>
        </div>
      </div>

      <Footer />
    </div>
  );
}

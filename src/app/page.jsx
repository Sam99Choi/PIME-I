"use client";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";

import Pages from "@/Components/Pages";

export default function Page() {
  const videos = [
    {
      id: 1,
      src: "/../video/videoteste.mp4",
      width: 640,
      height: 360,
      controls: true,
      autoplay: false,
      loop: true,
      muted: false,
    },
  ];

  return (
    <div className=" flex flex-col justify-center scroll-auto w-auto h-screen ">
      <Header />

      <div className="/bg-red-300 flex flex-col justify-center items-center h-full w-auto md:items-center mx-5  ">
        <div className="mb-10 flex flex-col items-center justify-center rounded-md  md:bg-gray-500 md:w-8/12 lg:w-6/12 xl:w-4/12 h-max pt-5 pb-5 ">
          <h1 className="text-center w-96 /mt-10 text-lg font-bold semibold">
            Escolha seu treino
          </h1>
          <section className="  flex flex-col items-center space-y-3 my-3  ">
            <Pages pagina={"Biceps"} url="biceps" />
            <Pages pagina={"Peito"} url="peito" />
            <Pages pagina={"Costas"} url="costas" />
            <Pages pagina={"Triceps"} url="triceps" />
            <Pages pagina={"Perna"} url="perna" />
            <Pages pagina={"Ombro"} url="ombro" />
            <Pages pagina={"Cardio"} url="cardio" />
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}

"use client";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Video from "@/Components/VideoComponent";
import { Suspense } from "react";
import VideoComponent from "@/Components/VideoComponent";
import ReactPlayer from "react-player/youtube";
import Modal from "@/Components/Modal";

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
          <h1 className="text-center w-96 /mt-10 text-lg font-bold semibold">Escolha seu treino</h1>
          <section className="  flex flex-col items-center space-y-3 my-3  ">
            <Pages pagina={"Biceps"} url="biceps" />
            <Pages pagina={"Peito"} url="peito"/>
            <Pages pagina={"Costas"} url='costas' />
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

/*


<Suspense fallback={<p>Loading video...</p>}>
        <VideoComponent  />
      </Suspense>

<iframe width="560" height="315" src="https://www.youtube.com/embed/watch?v=vDTvwdzFt30" frameborder="0" title="Cronometro" allowFullScreen></iframe>


      componente video
      <div className="scroll-auto grid grid-cols-2 mt-8 gap-4 px-5 items-center /justify-around mb-16">
        {videos.map((video) => (
          <Video key={video.id} {...video} />
        ))}
      </div>


        tag video
      <video autoPlay loop muted className="/bg-slate-300 w-80 h-80">
        <source src= {"videos/videoteste.mp4"} type="video/mp4" />
      </video>
*/

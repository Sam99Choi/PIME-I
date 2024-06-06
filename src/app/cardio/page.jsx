"use client";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import VideoComponent from "@/Components/VideoComponent";
import { useEffect, useState } from "react";

export default function Alongamento() {
  const [isLoaded, setIsloaded] = useState(false);
  const [videoCarregado, setVideocarregado] = useState(false);

  useEffect(() => {
    setIsloaded(true);
  }, []);

  if (!isLoaded) return null;

  const exercicios = [
    {
      id: 1,
      url: "https://www.youtube.com/watch?v=DM0fJHGbGew",
    },
    {
      id: 2,
      url: "https://www.youtube.com/watch?v=hLrGxomvEb0",
    },
    {
      id: 3,
      url: "https://www.youtube.com/watch?v=UUJ55DR-jPk",
    },
    {
      id: 4,
      url: "https://www.youtube.com/watch?v=VW4YRDcCkVU",
    },
  ];

  return (
    <div>
      <Header />
      <div className="mx-4 mt-3 mb-16 md:mb-0">
        <h1 className=" text-lg font-semibold">Treino de Cardio</h1>
        <div className=" md:grid 2xl:grid-cols-4  lg:grid-cols-3 md:grid-cols-2 justify-items-center start">
          {exercicios.length > 0
            ? exercicios.map((exercicio) => (
                <VideoComponent
                  key={exercicio.id}
                  url={exercicio.url}
                  width={exercicio.width}
                  height={exercicio.height}
                  controls={exercicio.controls}
                  playing={exercicio.playing}
                  onClick={() => setVideocarregado(!videoCarregado)}
                />
              ))
            : "não temos treinos ainda :("}
        </div>
      </div>

      <Footer />
    </div>
  );
}

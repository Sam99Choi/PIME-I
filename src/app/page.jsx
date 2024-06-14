/* eslint-disable @next/next/no-img-element */
"use client";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Pages from "@/Components/Pages";
import Image from "next/image";
import IconGroup from "@/Components/FooterComponents/IconGroup";
import IconPodium from "@/Components/FooterComponents/IconPodium";
import IconProfile from "@/Components/FooterComponents/IconProfile";
import IconHome from "@/Components/FooterComponents/IconHome";
import Link from "next/link";

export default function Page() {
  return (
    <div className=" flex flex-col justify-center scroll-auto w-full  h-screen ">
      <header className="static shadow inset-x-0 top-0 flex items-center py-1 md:py-2 bg-lime-400 ">
        <div className=" flex items-center w-full h-full gap-4 px-5 ">
          <Image
            className="border rounded-full max-h-20"
            src="/profile.png"
            alt="Descrição da imagem"
            width={70}
            height={70}
          />
          <p className="text-lg font-medium">@User_47</p>
        </div>
      </header>

      <div className=" flex flex-col justify-center items-center h-full w-auto md:items-center /mx-5  ">
        <div className="mb-10 /px-2 w-full flex flex-col items-center justify-center rounded-md sm:border-2 sm:shadow-lg /md:bg-gray-500 md:w-8/12 lg:w-6/12 xl:w-4/12 h-max pt-5 pb-5 ">
          <h1 className="text-center w-full 96 /mt-10 text-lg font-bold semibold">
            Escolha seu treino
          </h1>
          <section className=" flex flex-col items-center w-full sm:w-auto px-5  sm:px-0 space-y-3 my-3 ">
            <Link className="w-full" href={"biceps"}>
              <button className="flex items-center justify-center w-full 80 auto [370px] sm:w-96 h-12 bg-slate-200 rounded-lg hover:bg-lime-400 slate-400 hover:text-white font-medium ">
                {"Biceps"}
              </button>
            </Link>
            <Link className="w-full" href={"peito"}>
              <button className="flex items-center justify-center w-full [340px] sm:w-96 h-12 bg-slate-200 rounded-lg hover:bg-lime-400 slate-400 hover:text-white font-medium ">
                {"Peito"}
              </button>
            </Link>
            <Link className="w-full" href={"costas"}>
              <button className="flex items-center justify-center w-full [340px] sm:w-96 h-12 bg-slate-200 rounded-lg hover:bg-lime-400 slate-400 hover:text-white font-medium ">
                {"Costas"}
              </button>
            </Link>
            <Link  className="w-full" href={"triceps"}>
              <button className="flex items-center justify-center w-full [340px] sm:w-96 h-12 bg-slate-200 rounded-lg hover:bg-lime-400 slate-400 hover:text-white font-medium ">
                {"Triceps"}
              </button>
            </Link>
            <Link className="w-full" href={"perna"}>
              <button className="flex items-center justify-center w-full [340px] sm:w-96 h-12 bg-slate-200 rounded-lg hover:bg-lime-400 slate-400 hover:text-white font-medium ">
                {"Perna"}
              </button>
            </Link>
            <Link className="w-full" href={"ombro"}>
              <button className="flex items-center justify-center w-full [340px] sm:w-96 h-12 bg-slate-200 rounded-lg hover:bg-lime-400 slate-400 hover:text-white font-medium ">
                {"Ombro"}
              </button>
            </Link>
            <Link className="w-full" href={"cardio"}>
              <button className="flex items-center justify-center w-full [340px] sm:w-96 h-12 bg-slate-200 rounded-lg hover:bg-lime-400 slate-400 hover:text-white font-medium ">
                {"Cardio"}
              </button>
            </Link>
          </section>
        </div>
      </div>

      <footer className="fixed bottom-0 w-full h-12 bg-white ">
        <ul className="flex w-full h-full justify-around items-center border shadow">
          <li>
            <a href="/">
              {" "}
              <IconHome />{" "}
            </a>
          </li>
          <li>
            <a href="/amizades">
              <IconGroup />{" "}
            </a>
          </li>
          <li>
            <a href="/ranking">
              <IconPodium />
            </a>
          </li>
          <li className="hover:fill-lime-500">
            <a href="/perfil">
              <IconProfile />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

/* eslint-disable @next/next/no-img-element */
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";

export default function Perfil() {
  return (
    <div className=" flex flex-col scroll-auto w-auto h-screen ">
      <Header />
      <div className="flex flex-col items-center justify-center h-4/5 auto w-auto">
        <div className=" px-3 flex flex-col justify-center  rounded-md scroll-auto md:w-8/12 lg:w-6/12 xl:w-4/12  pt-5 pb-5 ">
          <h1 className=" w-96 text-lg font-bold semibold"></h1>
          <div className="flex items-center justify-center  w-full h-auto">
            <img src="/profile.png" alt="" width={150} height={150} />
          </div>
          <div className="flex flex-col items-start center space-y-2">
            <label className="font-medium" htmlFor="">Nome: </label>
            <input
              placeholder="User_47"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none "
              type="text"
            />
            <label htmlFor="">Idade: </label>
            <input
            placeholder="20"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none "
              type="text"
            />
            <label htmlFor="">Altura: </label>
            <input
            placeholder="1,80"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none "
              type="text"
            />
            <label htmlFor="">Peso: </label>
            <input
            placeholder="70 Kg"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none "
              type="text"
            />

            <label htmlFor="">Email: </label>
            <input
                placeholder="email@exemplo.com"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none "
              type="text"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
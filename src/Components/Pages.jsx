import Link from "next/link"

export default function Pages ({pagina, url}){
    return(
        <a href={url}>
        <button className="flex items-center justify-center w-[370px] sm:w-96 h-12 bg-slate-200 rounded-lg hover:bg-lime-400 slate-400 hover:text-white font-medium "  >
            {pagina}
        </button>
        </a>

    )
}
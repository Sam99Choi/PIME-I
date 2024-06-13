'use client'
import ReactPlayer from 'react-player'

export default function VideoComponent({ onClick, key, url,}) {


    return(
        <div className= ' /bg-black /w-96 h-44 md:w-auto md:h-auto flex flex-col justify-center items-center md:items-start  my-3  space-y-3'>
          <ReactPlayer loading='lazy' allowFullScreen key={key} width={360} height={180}  controls={true} playing={false} url={url} /> 

        </div>
    )
}





'use client'
import { useState } from 'react'
import ReactPlayer from 'react-player'

export default function VideoComponent({ onClick, key, url,}) {


    return(
        <div className= ' /bg-black /w-96 h-44 md:w-auto md:h-auto flex flex-col justify-center items-center md:items-start  my-3  space-y-3'>
          <ReactPlayer allowFullScreen key={key} width={360} height={180}  controls={true} playing={false} url={url} /> 

        </div>
    )
}
/*
          <ReactPlayer height={180} width={360} controls={true} playing={false} url='https://www.youtube.com/watch?v=XW9IZfHiVZM&t=2s' />
          <ReactPlayer height={180} width={360} controls={true} playing={false} url='https://www.youtube.com/watch?v=NZM9dui2MZo&list=RDQMtHX0LHiCIxY&start_radio=1' />  
          <ReactPlayer height={180} width={360} controls={true} playing={false} url='https://www.youtube.com/watch?v=XW9IZfHiVZM&t=2s' />    
          <ReactPlayer height={180} width={360} controls={true} playing={false} url='https://www.youtube.com/watch?v=XW9IZfHiVZM&t=2s' />   
*/





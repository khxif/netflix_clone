"use client"

import React from 'react'
import YouTube from 'react-youtube';

export default function Trailer({id}) {
  //console.log(id);

    const opts = {
        height: '350',
        width: '420',
        playerVars: {
          autoplay: 0,
        },
      };

  return (

    <div className='container mx-auto md:mx-0'>
        {
          id && (
            <YouTube
            videoId={id} opts={opts}
            />
          )
        }
    </div>

  )
}

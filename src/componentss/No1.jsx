import React from 'react'
import { NavLink } from 'react-router'

const No1 = () => {
  return (
    <>
           <section>
        <div className='min-h-screen w-full flex flex-col  items-center justify-center bg-red-50'>
            <div className='p-10 text-center bg-yellow-50  flex flex-col items-center justify-center w-auto h-auto'>
                <div>
                <h1 className='text-2xl'>
                    ehhhhhh what are u sayinggggg 😭😭😭
                </h1>
                <p className='text-center text-3xl'>
                    u dont love me
                </p>
                    
                <div class="tenor-gif-embed" data-postid="22050818" data-share-method="host" data-aspect-ratio="1" data-width="100%"><a href="https://tenor.com/view/mochi-gif-22050818">Mochi Sticker</a>from <a href="https://tenor.com/search/mochi-stickers">Mochi Stickers</a>
                </div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
                <h1>
                        WILL  YOU BE MY VALENTINE 🌹
                    </h1>
                </div>
                <div className='flex items-center text-center gap-2 p-2 justify-center'>
                    <NavLink to='/yes' className='bg-green-400 rounded-xl p-7'>

                        yes
                    </NavLink>
                    <NavLink to='/no2' className='bg-red-400 p-2 rounded-sm'>
                        no
                    </NavLink>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default No1
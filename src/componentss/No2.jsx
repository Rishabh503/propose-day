import React from 'react'
import { NavLink } from 'react-router'

const No2 = () => {
  return (
    <>
           <section>
        <div className='min-h-screen w-full flex flex-col  items-center justify-center bg-red-50'>
            <div className='p-10 bg-yellow-50 w-auto h-auto'>
                <div>
<div class="tenor-gif-embed" data-postid="15974530976611222074" data-share-method="host" data-aspect-ratio="1.26923" data-width="100%"><a href="https://tenor.com/view/peach-goma-phone-gif-15974530976611222074">Peach Goma Phone Sticker</a>from <a href="https://tenor.com/search/peach+goma-stickers">Peach Goma Stickers</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
                    <h1>
                        WILL  YOU BE MY VALENTINE 🌹
                    </h1>
                </div>
                <div className='flex items-center text-center gap-2 p-2 flex-wrap justify-center'>
                    <NavLink to='/yes' className='bg-green-400 rounded-xl p-9'>

                        yes
                    </NavLink>
                    <NavLink to='/no3' className='bg-red-400 p-2 rounded-sm'>
                        no
                    </NavLink>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default No2
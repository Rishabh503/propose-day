import React from 'react'
import { NavLink } from 'react-router'

const No5 = () => {
  return (
    <>
           <section>
        <div className='min-h-screen w-full flex flex-col  items-center justify-center bg-red-50'>
            <div className='p-10 bg-yellow-50 w-auto h-auto'>
                <div>
                <div class="tenor-gif-embed" data-postid="14520450841913152030" data-share-method="host" data-aspect-ratio="1.09649" data-width="100%"><a href="https://tenor.com/view/mochi-mochi-peach-cat-gif-gif-14520450841913152030">Mochi Mochi Peach Cat Gif Sticker</a>from <a href="https://tenor.com/search/mochi+mochi+peach+cat+gif-stickers">Mochi Mochi Peach Cat Gif Stickers</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
                    <h1>
                        WILL  YOU BE MY VALENTINE 🌹
                    </h1>
                </div>
                <div className='flex items-center text-center gap-2 p-2 flex-wrap justify-center'>
                    <NavLink to='/yes' className='bg-green-400 text-3xl rounded-xl p-16'>

                        yes
                    </NavLink>
                    <NavLink  to='/no6' className='bg-red-400 p-2 rounded-sm '>
                        no
                    </NavLink>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default No5
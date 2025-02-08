import React from 'react'
import { NavLink } from 'react-router'

const No4 = () => {
  return (
    <>
           <section>
        <div className='min-h-screen w-full flex flex-col  items-center justify-center bg-red-50'>
            <div className='p-10 bg-yellow-50 w-auto h-auto'>
                <div>
                <div  data-postid="9582531637857092465" data-share-method="host" data-aspect-ratio="1" data-width="100%"><a href="https://tenor.com/view/robert-cat-draw-gif-9582531637857092465">Robert Cat GIF</a>from <a href="https://tenor.com/search/robert-gifs">Robert GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
                    <h1>
                        WILL  YOU BE MY VALENTINE 🌹
                    </h1>
                </div>
                <div className='flex items-center text-center gap-2 p-2 flex-wrap justify-center'>
                    <NavLink to='/yes' className='bg-green-400 text-3xl rounded-xl p-16'>

                        yes
                    </NavLink>
                    <NavLink to='/no5' className='bg-red-400 p-2 rounded-sm'>
                        no
                    </NavLink>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default No4
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Yes = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://tenor.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section>
      <div className='min-h-screen w-full flex flex-col items-center justify-center bg-red-50'>
        <div className='p-10 bg-yellow-50 w-auto h-auto'>
          <div>
            {/* Updated: Kiss Cat GIF Sticker */}
            <div 
              className="tenor-gif-embed"
              data-postid="10074508638806394149"
              data-share-method="host"
              data-aspect-ratio="1"
              data-width="100%"
            >
              <a href="https://tenor.com/view/kiss-cat-gif-10074508638806394149">
                Kiss Cat GIF
              </a> from 
              <a href="https://tenor.com/search/kiss-gifs">
                Kiss GIFs
              </a>
            </div>

            <h1>YAY! YOU SAID YES ❤️</h1>
          </div>

          <div className='flex items-center text-center gap-2 p-2 justify-center'>
            <NavLink to='/success' className='bg-green-400 rounded-xl p-7'>
              🎉 Special Note For You here  🎉
            </NavLink>
            <NavLink to='/no2' className='bg-red-400 p-2 rounded-sm'>
              Just Kidding 😂
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Yes;

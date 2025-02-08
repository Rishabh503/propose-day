import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const No2 = () => {
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
          <div className='flex flex-col items-center justify-center text-center text-3xl'>
            <h2>FIRSE SOCHLEE 😭😭😭</h2>
            <p>kaha milega aisa ladka</p>

            {/* Updated Tenor Sticker */}
            <div
              className="tenor-gif-embed"
              data-postid="26864871"
              data-share-method="host"
              data-aspect-ratio="1.03226"
              data-width="100%"
            >
              <a href="https://tenor.com/view/peach-and-goma-goma-cry-tears-sob-gif-26864871">
                Peach And Goma Goma Cry Sticker
              </a>{' '}
              from{' '}
              <a href="https://tenor.com/search/peach+and+goma-stickers">
                Peach And Goma Stickers
              </a>
            </div>

            <h1>WILL YOU BE MY VALENTINE 🌹</h1>
          </div>

          <div className='flex items-center text-center gap-2 p-2 flex-wrap justify-center'>
            <NavLink to='/yes' className='bg-green-400 rounded-xl p-9'>Yes</NavLink>
            <NavLink to='/no3' className='bg-red-400 p-2 rounded-sm'>No</NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default No2;

import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const No5 = () => {
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
            {/* Tenor Sticker Embed */}
            <h1>
                LAGTA HAI APP NHI MANOGE JARA HU ME APKI MUUMY KE PASS COMPLAIN KRNE
            </h1>
            <div
              className="tenor-gif-embed"
              data-postid="14520450841913152030"
              data-share-method="host"
              data-aspect-ratio="1.09649"
              data-width="100%"
            >
              <a href="https://tenor.com/view/mochi-mochi-peach-cat-gif-gif-14520450841913152030">
                Mochi Mochi Peach Cat GIF Sticker
              </a>{' '}
              from{' '}
              <a href="https://tenor.com/search/mochi+mochi+peach+cat+gif-stickers">
                Mochi Mochi Peach Cat GIF Stickers
              </a>
            </div>

            <h1>WILL YOU BE MY VALENTINE 🌹</h1>
          </div>

          <div className='flex items-center text-center gap-2 p-2 flex-wrap justify-center'>
            <NavLink to='/yes' className='bg-green-400 text-3xl rounded-xl p-24'>
              Yes
            </NavLink>
            <NavLink to='/no6' className='bg-red-400 p-2 rounded-sm'>
              No
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default No5;

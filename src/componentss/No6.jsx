import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const No6 = () => {
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
            {/* Updated Tenor Sticker - Dudu Bye Bye */}
            <p>
                MAZAK LAGRA HAI APKOOO 😠
            </p>
            <p>
                last chance hai YESS KRDDOOO
            </p>
            <div 
              className="tenor-gif-embed"
              data-postid="10765992292554905215"
              data-share-method="host"
              data-aspect-ratio="1"
              data-width="100%"
            >
              <a href="https://tenor.com/view/dudu-bye-bye-gif-10765992292554905215">
                Dudu Bye Bye Sticker
              </a> from 
              <a href="https://tenor.com/search/dudu+bye+bye-stickers">
                Dudu Bye Bye Stickers
              </a>
            </div>

            <h1>WILL YOU BE MY VALENTINE 🌹</h1>
          </div>

          <div className='flex items-center text-center gap-2 p-2 flex-wrap justify-center'>
            <NavLink to='/yes' className='bg-green-400 text-3xl rounded-xl p-28'>Yes</NavLink>
            <NavLink to='/no7' className='bg-red-400 p-2 rounded-sm'>No</NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default No6;

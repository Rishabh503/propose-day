import React, { useEffect } from 'react';

const Success = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://tenor.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-red-50 p-4">
      <div className="bg-blue-100 p-6 rounded-xl shadow-lg w-auto max-w-2xl text-center space-y-6">
        
        {/* First Message */}
        <div className="p-4 bg-yellow-50 rounded-xl shadow-md">
          <p className="font-bold text-lg">Hi My lovee🥺🫂❤... Ik i m not an easy habit for you.. But i m glad I m a habit of you🥺❤... I m a lil dumb, a lil stupid, and a lil idiot.. But I lOOVEEE YOUUU LIKE ITNA SARA 😭❤️</p>
          <div className="mt-2">
            <div className="tenor-gif-embed" data-postid="13801352676628677702" data-share-method="host" data-aspect-ratio="0.708835" data-width="100%"></div>
          </div>
        </div>

        {/* Second Message */}
        <div className="p-4 bg-pink-50 rounded-xl shadow-md">
          <p className="font-bold text-lg">I lovee you to the moon and back 🚀🌙 tbyt khrbh h still I made this for u🥺❤😘... This is one of the ways I can show my love to you... It was all planned but my tbyt and yesterday's kaand made it worse for me to make this 😭😭😭</p>
          <div className="mt-2">
            <div className="tenor-gif-embed" data-postid="16140445942607794376" data-share-method="host" data-aspect-ratio="1" data-width="100%"></div>
          </div>
        </div>

        {/* Third Message */}
        <div className="p-4 bg-green-50 font-bold rounded-xl shadow-md">
          <p className="text-lg">Sometimes I mess up with things.. But I assure u one thing I will never ever repeat those ever 🥺❤... After all apka pookie hu maaf krdia kro 😘💖...</p>
          <div className="mt-2">
            <div className="tenor-gif-embed" data-postid="20040131" data-share-method="host" data-aspect-ratio="1" data-width="100%"></div>
          </div>
        </div>

        {/* Fourth Message */}
        <div className="p-4 bg-purple-50 rounded-xl font-bold shadow-md">
          <p className="text-lg">Just remember yrrr me hmesha tere sth rahuga teri haar jeet me meri haar jeet me hmesha 🌎 .. U r nothing less than my universe.. Tere liye sbse lad jauga sbse bhidh jauga pr thora time de merko.. Ye sb new h mere liye 🫶🫶.. I am already alot  away from my comfort zone... And have made u my comfort zone🥺🫂.. This message has taken more time than this website😭😭🫂❤🤯... Because it's not a line of code jo me logic se likhdu..</p>
          <div className="mt-2">
            <div className="tenor-gif-embed" data-postid="1225151986073773567" data-share-method="host" data-aspect-ratio="1" data-width="100%"></div>
          </div>
          <p>
          Yaha sb dil se ata h😞🫂❤😘

          </p>
        </div>

        {/* Final Message */}
        <div className="p-4 bg-red-100 rounded-xl shadow-md">
          <p className="text-xl font-bold">Will YOU BE MY VALENTINE'S AGAIN? 😭😭❤🫂</p>
          <p className="text-lg mt-2">ANSWER IN WHATSAPP 📲❤️</p>
        </div>

      </div>
    </section>
  );
};

export default Success;

'use client';

import { MouseEventHandler, useState } from 'react';

export default function Home() {
  const [data, setData] = useState<string | null>(null);
  const sendLocation: MouseEventHandler<HTMLButtonElement> = (e) => {
    async function success(position: any) {
      setData('sending location');
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(latitude, longitude);

      const res = await fetch('/location', {
        method: 'POST',
        body: JSON.stringify({
          latitude: `${latitude}`,
          longitude: `${longitude}`,
        }),
      });
      if (res.ok) console.log('location added successfully');
      setData('location added successfully');
    }
    navigator.geolocation.getCurrentPosition(success, () => {});
  };
  return (
    <main className="flex flex-col w-[100vw] h-[100vh] justify-center items-center">
      <button
        onClick={sendLocation}
        className="bg-black rounded mb-2 px-4 py-2 text-white"
      >
        Click to share location
      </button>
      {data}
    </main>
  );
}

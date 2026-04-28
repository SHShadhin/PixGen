import React from 'react';
import PhotoCard from './PhotoCard';

const TopGenerations = async () => {
  const res = await fetch('https://pix-gen-teal.vercel.app/data.json');
  const photos = await res.json();
  const topPhotos = photos.slice(0, 8)
  // console.log(topPhotos)
  return (
    <div>
      <h2 className='text-2xl font-medium my-10'>Top Generations</h2>
      <div className='grid grid-cols-4 gap-5'>
        {
          topPhotos.map(photo => <PhotoCard key={photo.id} photo={photo}></PhotoCard>)
        }
      </div>
    </div>
  );
};

export default TopGenerations;
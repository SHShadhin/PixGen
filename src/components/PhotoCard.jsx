import { Card, Separator } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { FaDownload, FaHeart } from 'react-icons/fa';

const PhotoCard = ({ photo }) => {
  // console.log(photo)
  return (
    <Card className="border">
      <div className='relative w-full aspect-square'>
        <Image
          src={photo.imageUrl}
          fill
          alt="photo.title"
        ></Image>
      </div>
      <div>
        <h2 className="text-lg font-medium">{photo.title}</h2>
      </div>

      <div className='flex gap-5'>
        <div className="flex items-center gap-2">
          <p>
            <FaHeart />
          </p>
          <p>{photo.likes}</p>
        </div>
        <Separator orientation='vertical'></Separator>
        <div className="flex items-center gap-2">
          <p>
            <FaDownload />
          </p>
          <p>{photo.downloads}</p>
        </div>
      </div>

      <button className=''>Details</button>
    </Card>
  );
};

export default PhotoCard;
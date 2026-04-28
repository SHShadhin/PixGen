import { Button, Card, Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { FaDownload, FaHeart } from 'react-icons/fa';

const PhotoCard = ({ photo }) => {
  // console.log(photo)
  return (
    <Card className="border rounded-xl">
      <div className="relative w-full aspect-square">
        <Image
          src={photo.imageUrl}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="photo.title"
          className="object-cover rounded-xl"
        ></Image>
        <Chip className='absolute top-2 right-2' color="danger">{photo.category}</Chip>
      </div>
      <div>
        <h2 className="text-lg font-medium">{photo.title}</h2>
      </div>

      <div className="flex gap-5">
        <div className="flex items-center gap-2">
          <p>
            <FaHeart />
          </p>
          <p>{photo.likes}</p>
        </div>
        <Separator orientation="vertical"></Separator>
        <div className="flex items-center gap-2">
          <p>
            <FaDownload />
          </p>
          <p>{photo.downloads}</p>
        </div>
      </div>

      <Button variant='outline' className="w-full">Details</Button>
    </Card>
  );
};

export default PhotoCard;
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {
    const carouselPhotos = ['/carousel/dude.jpg', '/carousel/dude2.png'];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [photos, setPhotos] = useState(carouselPhotos);

    return (
        <main className='flex h-fit flex-col items-center justify-between p-0 bg-white'>
            <section className='overflow-hidden w-[465px] h-fit flex items-center justify-center'>
                {photos.map((fileName, index) => {
                    return <Image key={index} width={465} height={581.25} alt={`Carousel image ${index}`} src={fileName} />;
                })}
            </section>
        </main>
    );
}

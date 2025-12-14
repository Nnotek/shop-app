'use client';

import { objectDataType } from '@/types/types';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function Page({ params }: { params: { id: string } }) {
    const [selectedImage, setSelectedImage] = useState({
        src: '',
        alt: '',
    });
    const [modalOpen, setModalOpen] = useState(false);

    const objectData: objectDataType = {
        '1': {
            title: 'MADE IN HELL LEATHER PUFFER COAT (BLACK)',
            price: '168.00',
            images: [
                { src: '/leather_puffer/Leather_Puffer_Large_Front.png', alt: 'front of jacket' },
                { src: '/leather_puffer/Leather_Puffer_Large_Back.png', alt: 'back of jacket' },
            ],
            details:
                'FAUX LEATHER LONG PUFFER COAT WITH APPLIQUÉ AMERICAN FLAG AND LETTERS, FRONT WELT POCKET, POUCH POCKETS, FAUX SATIN LINING AND HIDDEN RIBBED CUFFS.',
        },
    };

    const selectedItem = objectData[params.id];

    useEffect(() => {
        setSelectedImage(selectedItem.images[0]);
    }, []);

    return (
        <section className='flex flex-row pt-7'>
            <section className='w-1/2 flex flex-row items-start justify-between'>
                <Image
                    className='hover:cursor-zoom-in'
                    width={370}
                    height={370}
                    alt={selectedImage.alt}
                    src={selectedImage.src}
                />
                <article className='flex flex-col gap-y-4'>
                    {selectedItem.images.map((image, index) => {
                        return (
                            <Image
                                key={index}
                                className='hover:cursor-pointer'
                                onClick={() => setSelectedImage(image)}
                                src={image.src}
                                alt={image.alt}
                                height={70}
                                width={70}
                            />
                        );
                    })}
                </article>
            </section>
            <section className='flex flex-col w-1/2 pl-[30px]'>
                <h1 className='text-[50px] font-extrabold italic'>FTB</h1>
                <h1 className='text-[30px] font-serif font-bold'>{selectedItem.title}</h1>
                <h1 className='text-[30px] font-serif mt-5'>$ {selectedItem.price}</h1>
                <select title='Size selector' className='mt-3 px-2 py-3 border border-black bg-white rounded-sm w-fit'>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                    <option>X-Large</option>
                    <option>XX-Large</option>
                    <option>XXX-Large</option>
                </select>
                <button className='bg-black rounded-sm w-fit px-5 py-3 text-white font-serif mt-4 text-[15px]'>
                    ADD TO CART
                </button>
                <p className='text-[16px] mt-7 font-serif font-extralight'>{selectedItem.details}</p>
            </section>
        </section>
    );
}

'use client';

import React, { useContext } from 'react';
import { ShopContext } from '../context/shopContext';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
    const { cart } = useContext(ShopContext);

    return (
        <section className='px-auto pb-auto'>
            <h1 className='text-2xl font-semibold font-serif'>CART</h1>
            {cart.length ? (
                <>
                    {cart.map((item, index) => {
                        return (
                            <article key={index} className='w-auto h-auto'>
                                <div className='grid grid-cols-4 gap-0 py-[30px] w-full'>

                                    <section className='flex items-center w-auto h-auto'>
                                        <Image 
                                        alt={item.image.alt} 
                                        src={item.image.src} 
                                        width={200} height={200} />
                                    </section>

                                    <div className='w-auto h-auto'>
                                    <h1 className='flex items-center justify-center font-bold font-serif w-auto h-auto'>ITEM</h1>
                                        <h2 className=' flex items-center justify-center' >{item.title}</h2>
                                        <h2 className='' >Size: {item.size}</h2>
                                    </div>

                                    <div className='w-auto h-auto'>
                                    <h1 className='flex items-center justify-center font-bold font-serif w-auto h-auto'>QUANTITY</h1>
                                        <h2 className='flex items-center justify-center'>Quantity Button</h2>
                                    </div>

                                    <div className='w-auto h-auto'>
                                    <h1 className='flex items-center justify-center font-bold font-serif w-auto h-auto'>PRICE</h1>
                                        <h2 className='flex items-center justify-center'>$ {item.price} USD</h2>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </>
            ) : (
                <article className='flex flex-col gap-4 mt-4 font-serif font-extralight text-md'>
                    <h1>Your cart is currently empty.</h1>
                    <Link href={'/shop'}>Continue shopping here.</Link>
                </article>
            )}
            <div className='h-[200px] '>
                <hr className="my-6 border-t border-gray-300" />
                <section className='text-right bg-origin-padding-box p-4'>
                    <h1 className='text-2xl font-semibold font-serif my-2'>SUBTOTAL: $ {cart.reduce((total, item) => total + item.price, 0)} USD</h1>
                        <h2 className='text-xl font-serif'>ITEMS: {cart.length}</h2>
                            <p className='text-md font-serif mb-2'>{"(Taxes and shipping calculated at checkout)"}</p>
                            <p>Pay Button</p>
                </section>
            </div>
        </section>
        
    );
}

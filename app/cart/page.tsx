'use client';

import React, { useContext } from 'react';
import { ShopContext } from '../context/shopContext';
import Link from 'next/link';

export default function Page() {
    const { cart } = useContext(ShopContext);
    return (
        <section className='px-[30px] pb-[60px]'>
            <h1 className='text-2xl font-semibold font-serif'>Your Cart</h1>
            {cart.length ? (
                <>
                    {cart.map((item, index) => {
                        return (
                            <article key={index}>
                                <h1>Item</h1>
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
        </section>
    );
}

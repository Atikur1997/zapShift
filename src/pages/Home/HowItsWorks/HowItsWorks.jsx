import React from 'react';
import van from '../../../assets/delivery-van.png'

const HowItsWorks = () => {
    const info = [
        {
            id: 1,
            Image: { van },
            title: 'Booking Pick & Drop',
            description: 'From personal packages to business shipments — we deliver on time, every time..'
        },
        {
            id: 2,
            Image: { van },
            title: 'Cash On Delivery',
            description: 'From personal packages to business shipments — we deliver on time, every time.'
        },
        {
            id: 3,
            Image: { van },
            title: 'Delivery Hub',
            description: 'From personal packages to business shipments — we deliver on time, every time.'
        },
        {
            id: 4,
            Image: { van },
            title: 'Booking SME & Corporate',
            description: 'From personal packages to business shipments — we deliver on time, every time.'
        },

    ]
    return (
        <div className='my-10'>
            <h1 className='text-secondary text-2xl font-bold mb-5'>How Its Works</h1>
            <div className='flex flex-col  md:flex-row gap-4'>
                {
                    info.map((item) => (
                        <div key={item.id} className='bg-white px-4 py-2 rounded-lg shadow-2xl'>
                            <img src={item.Image.van} alt="" />
                            <h1 className='text-secondary font-bold'>{item.title}</h1>
                            <p className='text-secondary'>{item.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default HowItsWorks;
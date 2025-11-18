import React from 'react';
import service from '../../../assets/service.png';

const services = [
    { title: "Express & Standard Delivery", icon: service },
    { title: "Real-Time Tracking", icon: service },
    { title: "Safe & Secure", icon: service },
    { title: "Safe & Secure", icon: service },
    { title: "Safe & Secure", icon: service },
    { title: "Safe & Secure", icon: service },
];

const OurServices = () => {
    return (
        <div className='bg-secondary rounded-3xl py-10 text-white px-6 max-w-7xl mx-auto'>
            <h1 className='text-4xl text-center font-bold'>Our Services</h1>
            <p className='text-center text-[#dadada] mt-6 max-w-2xl mx-auto'>
                Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
                From personal packages to business shipments — we deliver on time, every time.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 gap-20'>
                {services.map((s, idx) => (
                    <div key={idx} className='flex flex-col items-center  bg-white py-20 rounded-2xl shadow-lg hover:bg-primary duration-1000'>
                        <div className='bg-gradient-to-r from-[#EEEDFC] to-[#D9D9F0] rounded-full p-6 shadow-lg '>
                            <img src={s.icon} alt={s.title} className='w-12 h-12' />
                        </div>
                        <h2 className='mt-4 text-lg font-medium text-center text-black'>
                            {s.title}
                        </h2>
                        <p className='text-secondary px-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium quaerat error rerum minus eum dolores dignissimos amet? Porro illo non animi culpa autem eaque ipsam tempore! Ex velit atque similique eum pariatur hic, ut aut, fuga sed ipsam voluptatum error autem eius deleniti cumque itaque consequuntur saepe, distinctio nam quod?</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurServices;

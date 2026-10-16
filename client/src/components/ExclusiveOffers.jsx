import React from 'react'
import Title from './Title'
import { assets, exclusiveOffers } from '../assets/assets'

const ExclusiveOffers = () => {
    return (
        <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-32'>
            <div className='flex flex-col md:flex-row items-center justify-between w-full'>
                <Title
                    title="Exclusive offers"
                    subTitle="Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories."
                    align="left"
                    font="font-playfair"
                />

                <button className='group flex items-center gap-2 font-medium cursor-pointer max-md:mt-12'>
                    View All Offers
                    <img src={assets.arrowRight} alt="Right Arrow" className='group-hover:translate-x-1 transition-all' />
                </button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full'>
                {exclusiveOffers.map((item) => (
                    <div
                        key={item._id}
                        className='group relative flex flex-col justify-between h-80 rounded-xl overflow-hidden bg-cover bg-center'
                        style={{ backgroundImage: `url(${item.image})` }}
                    >
                        {/* Dark overlay */}
                        <div className='absolute inset-0 bg-black/40' />

                        {/* Content */}
                        <div className='relative z-10 p-6 text-white'>
                            <span className='inline-block px-3 py-1 text-xs bg-white text-gray-800 font-medium rounded-full'>
                                {item.discount}
                            </span>
                            <h3 className='text-xl font-semibold mt-4'>{item.title}</h3>
                            <p className='text-sm opacity-90 mt-1'>{item.description}</p>
                            <p className='text-xs opacity-70 mt-2'>Expires {item.expires}</p>
                        </div>

                        <div className='relative z-10 p-6'>
                            <button className='flex items-center gap-2 text-sm font-medium group/btn'>
                                View Offers
                                <img
                                    src={assets.arrowRight}
                                    alt=""
                                    className='group-hover/btn:translate-x-1 transition-transform'
                                />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ExclusiveOffers
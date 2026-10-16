import React from 'react'
import Title from './Title'
import { testimonials, assets } from '../assets/assets'

const Testimonial = () => {
    return (
        <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 py-20">

            <Title
                title="What Our Guests Say"
                subTitle="Discover what our guests have to say about their experience." />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full">

                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="border border-gray-200 rounded-xl p-6" >

                        {/* Guest information */}
                        <div className="flex items-center gap-4">

                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-14 h-14 rounded-full object-cover"/>

                            <div>
                                <p className="font-playfair text-xl">
                                    {testimonial.name}
                                </p>

                                <p className="text-gray-500">
                                    {testimonial.address}
                                </p>
                            </div>

                        </div>

                        {/* Stars */}
                        <div className="flex items-center gap-1 mt-4">

                            {Array(5)
                                .fill(0)
                                .map((_, index) => (
                                    <img
                                        key={index}
                                        src={assets.star}
                                        alt="star"
                                        className="w-4 h-4"
                                    />
                                ))}

                        </div>
                        <div className='flex items-center gap-1 mt-4'>
                        </div>

                        {/* Review */}
                        <p className="text-gray-600 mt-4 leading-relaxed">
                            "{testimonial.review}"
                        </p>

                    </div>

                ))}

            </div>
        </div>
    )
}

export default Testimonial
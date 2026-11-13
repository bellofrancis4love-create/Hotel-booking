import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const HotelCard = ({ room, index }) => {
    return (
        <Link to={'/rooms/' + room._id} onClick={() => window.scrollTo(0, 0)} className="relative block w-full max-w-70 w-full rounded-xl overflow-hidden bg-white text-grey-500/90 shadow-[0px_4px_4px_rgba(0,0,0,0.05)]">

            {/* Hotel Image */}
            <img src={room.images[0]} alt={room.hotel.name} className="relative max-w-70 w-full rounded-xl overflow-hidden bg-white text-grey-500/90 shadow-[0px_4px_4px_rgba(0,0,0,0.05)]" />

            {/* Best Seller Badge */}
            {index % 2 === 0 && (
                <p className="absolute top-0 left-0 px-3 py-1 bg-black text-white font-playfair text-sm font-bold"> Best seller</p>
            )}

            {/* Hotel Information */}
            <div className="pt-5">
                {/* Name and Rating */}
                <div className="flex items-center justify-between">
                    <p className="font-playfair text-xl font-medium text-gray-800">{room.hotel.name} </p>

                    <div className="flex items-center gap-1">
                        <img src={assets.star} alt="Star" className="w-4 h-4" />
                        {room.rating}
                    </div>

                </div>

                {/* Address */}
                <div className="flex items-center gap-1 text-sm mt-1">
                    <img src={assets.map} alt="Map" className="w-4 h-4" />

                    <span>{room.hotel.address}</span>

                </div>

                {/* Price and Button */}
                <div className="flex items-center justify-between mt-4">

                    <p>
                        <span className="text-xl text-gray-800">
                            ${room.pricePerNight}
                        </span>
                        <span className="text-sm text-gray-500">
                            /night
                        </span>
                    </p>

                    <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition duration-300">
                        Book Now
                    </button>

                </div>

            </div>

        </Link>
    )
}

export default HotelCard
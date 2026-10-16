import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { assets, roomsDummyData, facilityIcons, amenities } from '../assets/assets'
import StarRating from '../components/StarRating'


// ==================== CHECKBOX COMPONENT ====================

const CheckBox = ({ label, selected = false, onChange = () => { }
}) => {
    return (
        <label className='flex gap-3 items-center cursor-pointer mt-2 text-sm'>
            <input type='checkbox' checked={selected} onChange={(e) => onChange(e.target.checked, label)} />
            <span className='font-light select-none'>
                {label}
            </span>
        </label>
    )
}


// ==================== RADIO BUTTON COMPONENT ====================

const RadioButton = ({ label, selected = false, onChange = () => { } }) => {
    return (
        <label className='flex gap-3 items-center cursor-pointer mt-2 text-sm'>
            <input type='radio' name='sortOption' checked={selected} onChange={() => onChange(label)} />
            <span className='font-light select-none'>
                {label}
            </span>
        </label>
    )
}


// ==================== ALL ROOMS COMPONENT ====================

const AllRooms = () => {
    const navigate = useNavigate()

    // ==================== STATE ====================

    const [openFilters, setOpenFilters] = useState(false)


    // ==================== ROOM CLICK ====================

    const handleRoomClick = (roomId) => {
        navigate(`/rooms/${roomId}`)
        window.scrollTo(0, 0)

    }


    // ==================== FILTER DATA ====================

    const roomTypes = [
        'Single Bed',
        'Double Bed',
        'Luxury Room',
        'Family Suite'
    ]


    const priceRanges = [
        '0 to 500',
        '500 to 1000',
        '1000 to 2000',
        '2000 to 3000'
    ]


    const sortOptions = [
        'Price Low to High',
        'Price High to Low',
        'Newest First'
    ]


    // ==================== RETURN ====================

    return (

        <div className='pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32'>


            {/* ==================== PAGE HEADER ==================== */}

            <div className='flex flex-col items-start text-left'>
                <h1 className='font-playfair text-4xl md:text-[40px]'>
                    Hotel Rooms
                </h1>

                <p className='text-sm md:text-base text-gray-500/90 mt-2 max-w-xl'>
                    Take advantage of our limited-time offers and special
                    packages to enhance your stay and create unforgettable
                    memories.
                </p>

            </div>


            {/* ==================== MAIN CONTENT ==================== */}
            <div className='flex flex-col lg:flex-row gap-8 mt-10'>


                {/* ==================== FILTERS ==================== */}
                <div className='order-1 lg:order-2 w-full lg:w-80 h-fit bg-white border border-gray-300 text-gray-600'>


                    {/* FILTER HEADER */}
                    <div className='flex items-center justify-between p-4 border-b border-gray-200'>

                        <p className='text-base font-medium text-gray-800'>
                            FILTERS
                        </p>


                        {/* Mobile SHOW / HIDE */}
                        <div className='text-xs cursor-pointer'>
                            <span
                                onClick={() => setOpenFilters(!openFilters)} className='lg:hidden' >
                                {openFilters ? 'HIDE' : 'SHOW'}
                            </span>


                            {/* Desktop CLEAR */}

                            <span className='hidden lg:block'>
                                CLEAR
                            </span>

                        </div>

                    </div>


                    {/* ==================== FILTER CONTENT ==================== */}

                    <div
                        className={`  ${openFilters ? 'h-auto' : 'h-0 lg:h-auto'}  overflow-hidden  transition-all duration-700  `}  >


                        {/* ==================== POPULAR FILTERS ==================== */}

                        <div className='px-5 pt-5'>

                            <p className='font-medium text-gray-800 pb-2'>
                                Popular Filters
                            </p>


                            {roomTypes.map((room, index) => (

                                <CheckBox key={index} label={room} />

                            ))}

                        </div>


                        {/* ==================== PRICE RANGE ==================== */}

                        <div className='px-5 pt-5'>

                            <p className='font-medium text-gray-800 pb-2'>
                                Price Range
                            </p>


                            {priceRanges.map((range, index) => (

                                <CheckBox key={index} label={`$ ${range}`} />

                            ))}

                        </div>


                        {/* ==================== SORT OPTIONS ==================== */}

                        <div className='px-5 pt-7 pb-5'>

                            <p className='font-medium text-gray-800 pb-2'>
                                Sort By
                            </p>


                            {sortOptions.map((option, index) => (

                                <RadioButton key={index} label={option} />

                            ))}

                        </div>


                        {/* ==================== AMENITIES ==================== */}

                        <div className='px-5 pt-2 pb-5'>

                            <p className='font-medium text-gray-800 pb-2'>
                                Amenities
                            </p>


                            <div className='flex flex-col gap-3'>

                                {amenities.map((item) => (

                                    <label key={item} className='flex items-center gap-2 text-sm cursor-pointer' >

                                        <input type='checkbox' className='w-4 h-4 cursor-pointer' />

                                        <span>
                                            {item}
                                        </span>

                                    </label>

                                ))}

                            </div>

                        </div>

                    </div>

                </div>


                {/* ==================== ROOMS ==================== */}

                <div className='order-2 lg:order-1 flex-1'>


                    {roomsDummyData.map((room) => (

                        <div
                            key={room._id}
                            className='flex flex-col md:flex-row items-start gap-6 py-10 border-b border-gray-300 last:border-0'
                        >


                            {/* ==================== ROOM IMAGE ==================== */}

                            <img src={room.images[0]} alt={room.hotel.name} title='View Room Details' onClick={() => handleRoomClick(room._id)} className='w-full md:w-1/2 max-h-65 rounded-xl shadow-lg object-cover cursor-pointer' />


                            {/* ==================== ROOM INFORMATION ==================== */}

                            <div className='w-full md:w-1/2 flex flex-col gap-2'>


                                {/* CITY */}
                                <p className='text-gray-500'> {room.hotel.city} </p>


                                {/* HOTEL NAME */}

                                <p onClick={() => handleRoomClick(room._id)} className='text-gray-800 text-3xl font-playfair cursor-pointer hover:text-gray-600'>{room.hotel.name} </p>


                                {/* ==================== RATING ==================== */}

                                <div className='flex items-center'>

                                    <StarRating rating={room.rating} />

                                    <p className='ml-2 text-sm text-gray-600'> {room.reviews} reviews </p>

                                </div>


                                {/* ==================== ADDRESS ==================== */}

                                <div className='flex items-center gap-2 text-gray-500 mt-2 text-sm'>

                                    <img
                                        src={assets.map}
                                        alt='Location'
                                        className='w-4 h-4'
                                    />

                                    <span>
                                        {room.hotel.address}
                                    </span>

                                </div>


                                {/* ==================== AMENITIES ==================== */}

                                <div className='flex flex-wrap gap-3 mt-3 mb-4'>

                                    {room.amenities.map((item) => (

                                        <div key={item}  className='flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F5F5FF]/70'>

                                            <img src={facilityIcons[item]} alt={item} className='w-5 h-5' />

                                            <p className='text-xs'>
                                                {item}
                                            </p>

                                        </div>

                                    ))}

                                </div>


                                {/* ==================== PRICE ==================== */}

                                <p className='text-xl font-medium text-gray-700'>

                                    ${room.pricePerNight}

                                    <span className='text-sm font-normal text-gray-500'>
                                        {' '}/ Night
                                    </span>

                                </p>


                            </div>

                        </div>

                    ))}


                </div>

            </div>

        </div>

    )
}


export default AllRooms
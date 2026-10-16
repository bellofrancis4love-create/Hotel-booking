import React, { useState } from 'react'
import Title from '../../components/Title'
import { assets } from '../../assets/assets'

const AddRoom = () => {

  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null
  })

  const [input, setInput] = useState({
    roomType: '',
    pricePerNight: 0,
    amenities: {
      'Free Wi-Fi': false,
      'Free Breakfast': false,
      'Room Service': false,
      'Mountain View': false,
      'Pool Access': false,
    }
  })

  return (
    <form>
      <Title
        align='left'
        font='outfit'
        title='Add Room'
        subTitle='Fill in the details carefully and accurate room details, pricing and amenities to enhance the user booking experience' />

      <p className='text-gray-800 mt-10'>Images</p>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-4'>
        {Object.keys(images).map((key) => (
          <label htmlFor={`roomImage${key}`} key={key} className='cursor-pointer'>
            <div className='w-full h-32 flex flex-col items-center justify-center 
                            bg-gray-100 hover:bg-gray-200 rounded-lg 
                            transition-colors duration-200 overflow-hidden'>
              {images[key] ? (
                <img
                  src={URL.createObjectURL(images[key])}
                  alt={`Room image ${key}`}
                  className='w-full h-full object-cover' />
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 mb-1 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2" >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <span className='text-xs text-gray-400'>Upload</span>
                </>
              )}
            </div>

            <input
              type='file'
              accept='image/*'
              id={`roomImage${key}`}
              hidden
              onChange={(e) => setImages({ ...images, [key]: e.target.files[0] })}
            />
          </label>
        ))}
      </div>
      <div className='w-full flex max-sm:flex-col sm:gap-4 mt-4'>
        <div className='flex-1 max-w-48'>
          <p className='text-gray-800 mt-4'>Room Type</p>
          <select value={input.roomType} onChange={(e) => setInput({ ...input, roomType: e.target.value })}
            className='border opacity-70 border-gray-300 mt-1 rounded p-2  w-full' name="" id="">
            <option value="">Select Room Type</option>
            <option value="Single Bed">Single Bed</option>
            <option value="Double Bed">Double Bed</option>
            <option value="Luxury Room">Luxury Room</option>
            <option value="Family Suite">Family Suite</option>
          </select>
        </div>
        <div>
          <p className='text-gray mt-4'>
            Price <span className='text-xs'>/ Night</span>
          </p>
          <input type='number' placeholder='0' className='border border-gray-300 mt-1 rounded p-2 w-24' value={input.pricePerNight}
            onChange={(e) => setInput({ ...input, pricePerNight: e.target.value })} />
        </div>
      </div>
      <p className='text-gray mt-4'>Amenities</p>
      <div className='flex flex-col flex-wrap mt-1 text-gray-700 max-w-sm'>
        {Object.keys(input.amenities).map((amenity, index) => (
          <div key={index}>
            <input type='checkbox' id={`amenities${index + 1}`} />
            <label htmlFor={`amenities${index + 1}`} className='ml-2'>
              {amenity}
            </label>
          </div>
        ))}
      </div>
    </form>
  )
}

export default AddRoom
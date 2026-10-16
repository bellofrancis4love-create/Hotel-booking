import React from 'react'
import { assets } from '../assets/assets'

const StarRating = ({ rating = 5 }) => {
    return (
        <div className="flex items-center gap-1">
            {Array(5).fill(0).map((_, index) => (
                <img key={index} src={assets.star} alt="star" className="w-4 h-4" />
            ))}
        </div>
    )
}

export default StarRating
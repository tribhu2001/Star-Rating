import React from 'react'
import { useState } from 'react';
import { IoIosStarOutline, IoIosStarHalf, IoIosStar } from 'react-icons/io';
const StarRating = () => {
    const [rating, setRating] = useState(0);
    const handleOnClick = (e, index) => {
        const {left, width} = e.target.getBoundingClientRect();
        const extra = e.clientX - left;
        if(extra<width/2){
            setRating(index + 0.5);
        }
        else{
            setRating(index + 1);
        }
    }
    return (
        <div className='star-component'>
            <div>
                {[...Array(5)].map((it, index) => {
                    return <span key={index} onClick={(e) => handleOnClick(e, index)} className='star-icon'>
                        {index<rating ? index>rating-1 ? <IoIosStarHalf style={{color: 'gold'}}/> : <IoIosStar style={{color: 'gold'}}/> : <IoIosStarOutline />}
                    </span>
                })}
            </div>
            <div>Rating: {rating}</div>
        </div>
    )
}

export default StarRating

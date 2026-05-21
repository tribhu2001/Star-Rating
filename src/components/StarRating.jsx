import React from 'react'
import { useState } from 'react';
import { IoIosStarOutline, IoIosStarHalf, IoIosStar } from 'react-icons/io';
const StarRating = ({size}) => {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
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

    const handleOnMouseMover = (e, index) => {
        const {left, width} = e.target.getBoundingClientRect();
        const extra = e.clientX - left;
        if(extra<width/2){
            setHoverRating(index + 0.5);
        }
        else{
            setHoverRating(index + 1);
        }
    }
    return (
        <div className='star-component'>
            <div>
                {[...Array(size)].map((it, index) => {
                    return <span key={index} onClick={(e) => handleOnClick(e, index)} onMouseOver={(e)=> handleOnMouseMover(e,index)} onMouseLeave={()=>setHoverRating(0)} className='star-icon'>
                        {index<(hoverRating||rating) ? index>(hoverRating||rating)-1 ? <IoIosStarHalf style={{color: 'gold'}}/> : <IoIosStar style={{color: 'gold'}}/> : <IoIosStarOutline />}
                    </span>
                })}
            </div>
            <div>Rating: {rating}</div>
        </div>
    )
    // &#9733 => code for star icon
}

export default StarRating

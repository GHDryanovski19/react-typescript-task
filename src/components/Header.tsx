import { useState } from 'react'
import { FaRegStar } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa'
import Button from './Button';
import data from '../data/header.json'

type HeaderProps = {
    newOrder: Function
}

const Header = ({ newOrder } : HeaderProps) => {
    const [hover, setHover] = useState(false);
    const [star, setStar] = useState(false);

    const starIconStyle = {
        color: `${star ? '#FFCD3C' : '#AAAAAA'}`,
        cursor: 'pointer',
        transition: 'all 200ms',
        "&:hover": {
            color : '#FFCD3C',
            cursor: 'pointer',
            transition: 'all 200ms',
        },
    }
    return (
        <div className='header-container'>
            {star ? 
            <FaStar className='header-container-star-icon' 
            onMouseEnter={()=>{
                setHover(true);
            }}
            onMouseLeave={()=>{
                setHover(false);
            }}
            style={hover ? starIconStyle['&:hover'] : starIconStyle} onClick={() => (setStar(!star))}/> :
            <FaRegStar className='header-container-star-icon' 
            onMouseEnter={()=>{
                setHover(true);
            }}
            onMouseLeave={()=>{
                setHover(false);
            }}
            style={hover ? starIconStyle['&:hover'] : starIconStyle} onClick={() => (setStar(!star))}/> 
            }
            <text className='header-container-user-name'>{data.first_name + ' ' + data.last_name}</text>
            <Button functionality={newOrder}/>
        </div>
    )
}

export default Header
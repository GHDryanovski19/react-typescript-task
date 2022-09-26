import { HeaderProps } from '../../types';
import { useState } from 'react'
import { FaRegStar } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa'
import Button from './Button';
import style from './Header.module.scss'

const Header = ({ newOrder, first_name, last_name } : HeaderProps) => {
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
    }}

    return (
        <div className={style['header-container']}>
            {star ? 
            <FaStar className={style['header-container-star-icon']} 
                onMouseEnter={()=>{
                    setHover(true);
                }}
                onMouseLeave={()=>{
                    setHover(false);
                }}
                style={hover ? starIconStyle['&:hover'] : starIconStyle} onClick={() => (setStar(!star))}/> :
            <FaRegStar className={style['header-container-star-icon']} 
                onMouseEnter={()=>{
                    setHover(true);
                }}
                onMouseLeave={()=>{
                    setHover(false);
                }}
                style={hover ? starIconStyle['&:hover'] : starIconStyle} onClick={() => (setStar(!star))}/> 
            }
            <text className={style['header-container-user-name']}>{first_name + ' ' + last_name}</text>
            <Button functionality={newOrder}/>
        </div>
    )
}

export default Header
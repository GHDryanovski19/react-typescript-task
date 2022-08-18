import { useState } from 'react'
import PropTypes from 'prop-types'

type ButtonProps = {
    color: string,
    text: string
    functionality: Function
}

const Button = ( {color, text, functionality} : ButtonProps ) => {

    const [hover, setHover] = useState(false);

    const buttonStyle = {
        backgroundColor: color,
        transition: 'all 200ms',
        cursor: 'pointer',
        "&:hover": {
            backgroundColor: color,
            opacity: '0.6',
            transition: 'all 200ms',
            cursor: 'pointer',
        },
    }
    return (
        <button className='header-container-button' 
        onMouseEnter={()=>{
            setHover(true);
        }}
        onMouseLeave={()=>{
            setHover(false);
        }}
        style={hover ? buttonStyle['&:hover'] : buttonStyle}
        onClick={() => {functionality(); setHover(false)}}>{text}</button>
    )
}

Button.defaultProps = {
    color: '#404040',
    text: 'New Order'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}

export default Button
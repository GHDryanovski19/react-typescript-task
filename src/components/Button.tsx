import { useState } from 'react'
import PropTypes from 'prop-types'
import { NONAME } from 'dns'

type ButtonProps = {
    color: string,
    text: string
    functionality: Function
}

const Button = ( {color, text, functionality} : ButtonProps ) => {
    const [disabled, setDisabled] = useState(false);
    const buttonStyle = {
        backgroundColor: color
    }
    const buttonStyleDis = {
        backgroundColor: color,
        opacity: 1,
        transition: 'none'
    }
    return (
        <button className='header-container-button' 
        style={disabled ? buttonStyleDis : buttonStyle}
        onClick={() => {functionality(); setDisabled(true); setTimeout(() => {setDisabled(false)}, 1000);}}>{text}</button>
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
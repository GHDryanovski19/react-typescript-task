import PropTypes from 'prop-types'
import { ButtonProps } from '../../types'
import style from './Header.module.scss'

const Button = ( {color, text, functionality} : ButtonProps ) => {
    const buttonStyle = {
        backgroundColor: color
    }

    return (
        <button className={style['header-container-button']} 
        style={buttonStyle}
        onClick={() => {functionality()}}>{text}</button>
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
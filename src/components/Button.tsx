import PropTypes from 'prop-types'

type ButtonProps = {
    color: string,
    text: string
    functionality: Function
}

const Button = ( {color, text, functionality} : ButtonProps ) => {
    const buttonStyle = {
        backgroundColor: color
    }

    return (
        <button className='header-container-button' 
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
import { useState } from 'react'
import PropTypes from 'prop-types'

type OrderButtonState = {
    id : number
    text : string
    isHighlighted : boolean
}

type OrderButtonsProps = {
    orderButton: OrderButtonState | undefined // At index returns the type + undefined
    toggleOrderButton: Function
}

const OrderButton = ({orderButton, toggleOrderButton} : OrderButtonsProps) => {
    const [hover, setHover] = useState(false);
    const ButtonStyle = {
        marginLeft: `${orderButton?.id == 1 ? '151px' : '2px'}`,
        marginTop: '40px',
        color: `${orderButton?.isHighlighted ? '#FFF' : '#000'}`,
        backgroundColor: `${orderButton?.isHighlighted ? '#3A3A3A' : '#D2D2D2'}`,
        transition: 'all 200ms',
        "&:hover": {
            marginLeft: `${orderButton?.id == 1 ? '151px' : '2px'}`,
            marginTop: '40px',
            color: `${orderButton?.isHighlighted ? '#FFF' : '#000'}`,
            backgroundColor: `${orderButton?.isHighlighted ? '#2A2A2A' : '#C2C2C2'}`,
            transition: 'all 200ms',
    }}

  return (
    <button className='orders-container-button' 
    onMouseEnter={()=>{
        setHover(true);
    }}
    onMouseLeave={()=>{
        setHover(false);
    }}
    style={hover ? ButtonStyle['&:hover'] : ButtonStyle} 
    onClick={() => toggleOrderButton(orderButton?.id)}>{orderButton?.text}</button>
  )
}

OrderButton.defaultProps = {
    text: 'ORDERS'
}

OrderButton.propTypes = {
    text: PropTypes.string
}

export default OrderButton
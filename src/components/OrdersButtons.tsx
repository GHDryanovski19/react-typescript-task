import OrderButton from './OrderButton'

type OrderButtonState = {
    id : number
    text : string
    isHighlighted : boolean
}

type OrderButtonsProps = {
    orderButtons: OrderButtonState[]
    toggleOrderButton: Function
}

const OrdersButtons = ( {orderButtons, toggleOrderButton } : OrderButtonsProps ) => {
    return (
        <div className='orders-buttons-container'>
            {orderButtons.map((orderBtn) => (
                <OrderButton key={orderBtn.id} orderButton={orderBtn} toggleOrderButton={toggleOrderButton} />
            ))}
        </div>
    )
}

export default OrdersButtons
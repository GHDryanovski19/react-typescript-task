import OrderButton from './OrderButton'
import { OrderButtonsProps } from '../types'

const OrdersButtons = ( {orderButtons, toggleOrderButton, getOrderData} : OrderButtonsProps ) => {
    return (
        <div className='orders-buttons-container'>
            {orderButtons.map((orderBtn) => (
                <OrderButton key={orderBtn.id} orderButton={orderBtn} toggleOrderButton={toggleOrderButton} getOrderData={getOrderData}/>
            ))}
        </div>
    )
}

export default OrdersButtons
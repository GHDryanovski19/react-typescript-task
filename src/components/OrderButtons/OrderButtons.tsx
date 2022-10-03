import OrderButton from '../OrderButton/OrderButton'
import { OrderButtonsProps } from '../../types'
import style from './OrderButton.module.scss'

const OrderButtons = ( {orderButtons, toggleOrderButton, getOrderData} : OrderButtonsProps ) => {
    return (
        <div className={style['orders-buttons-container']}>
            {orderButtons.map((orderBtn) => (
                <OrderButton key={orderBtn.id} orderButton={orderBtn} toggleOrderButton={toggleOrderButton} getOrderData={getOrderData}/>
            ))}
        </div>
    )
}

export default OrderButtons
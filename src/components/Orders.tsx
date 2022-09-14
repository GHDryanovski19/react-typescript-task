import { useState } from 'react';
import OrdersButtons from './OrdersButtons';
import RecentOrders from './RecentOrders';

const Orders = () => {


    const [orderButtons, setOrderButton] = useState([
        {
          id: 1,
          text: 'ORDERS A',
          isHighlighted: true,
        },
        {
          id: 2,
          text: 'ORDERS AA',
          isHighlighted: false,
        },
        {
          id: 3,
          text: 'ORDERS AAA',
          isHighlighted: false,
        },
        {
          id: 4,
          text: 'ORDERS B',
          isHighlighted: false,
        },
        {
          id: 5,
          text: 'ORDERS C',
          isHighlighted: false,
        }
      ])
    
      const [subTabButtons, setSubTabButtons] = useState ([
        {
          id: 1,
          text: 'SENT',
          isHighlighted: true,
        },
        {
          id: 2,
          text: 'ERRORS',
          isHighlighted: false,
        },
      ])
    
      const toggleOrderButton = (id : number) => {
        setOrderButton(orderButtons.map((OrderButton) => OrderButton.id === id ?
        { ...OrderButton, isHighlighted: true} : 
        { ...OrderButton, isHighlighted: false}))
      }
    
      const toggleSubTabButton = (id : number) => {
        setSubTabButtons(subTabButtons.map((subTabButton) => subTabButton.id === id ?
        { ...subTabButton, isHighlighted: true} : 
        { ...subTabButton, isHighlighted: false}))
      }
  return (
    <div>
        <OrdersButtons 
        orderButtons={orderButtons} 
        toggleOrderButton={toggleOrderButton}/>

      <hr className="order-buttons-container-hr"></hr>

      <RecentOrders 
        subTabButtons={subTabButtons}
        toggleSubTabButton={toggleSubTabButton} 
        orderButtons={orderButtons}/>
    </div>
  )
}

export default Orders
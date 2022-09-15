import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrderRequest } from '../actions';
import { RootState } from '../reducers/rootReducer';
import OrdersButtons from './OrdersButtons';
import RecentOrders from './RecentOrders';
import { IOrder } from '../types';

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

    const dispatch = useDispatch();
    const {pending, orders } = useSelector(
        (state: RootState) => state.order
    );

    useEffect(() => {
        dispatch(fetchOrderRequest());
    }, []);

    const [orderData, setOrderData] = useState<IOrder[]>()

    const getOrderData = () => {
      orderButtons.map((OrderButton) => {
        if (OrderButton.isHighlighted === true) {
          switch (OrderButton.id) {
            case 1: {setOrderData(orders.orders_A.sent); break;}
            case 2: {setOrderData(orders.orders_AA.sent); break;}
            case 3: {setOrderData(orders.orders_AAA.sent); break;}
            case 4: {setOrderData(orders.orders_B.sent); break;}
            case 5: {setOrderData(orders.orders_C.sent); break;}
          }
        }
      })
    }
  
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
          toggleOrderButton={toggleOrderButton}
          getOrderData={getOrderData}/>

        <hr className="order-buttons-container-hr"></hr>

        <RecentOrders 
          subTabButtons={subTabButtons}
          toggleSubTabButton={toggleSubTabButton}
          orderData={orderData}/>
      </div>
    )
}

export default Orders
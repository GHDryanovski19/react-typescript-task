import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrderRequest } from '../actions';
import { RootState } from '../reducers/rootReducer';
import OrderButtons from './OrderButtons/OrderButtons';
import RecentOrders from './RecentOrders/RecentOrders';
import { IOrder } from '../types';
import { OrderButtonState } from '../types';
import orderReducer from '../reducers/orderReducer';

const Orders = () => {
    const dispatch = useDispatch();
    const {pending, orders } = useSelector(
        (state: RootState) => state.order
    );

    useEffect(() => {
        dispatch(fetchOrderRequest());
    }, []);
    
    const [flag, setFlag] = useState(false);

    const [orderButtons, setOrderButtons] = useState<OrderButtonState[]>();

    function setOrderButtonsData() {
      let buttons: OrderButtonState[] = [];
      orders.map((order) => {
        let button: OrderButtonState = {
          id: order.id,
          text: order.key.replace("_", " ").toUpperCase(),
          isHighlighted: false
        };

        buttons.push(button);
      })

      buttons[0].isHighlighted = true;
      setOrderButtons(buttons);
    }
    
    if (!flag && orders[0] != undefined) {
      setOrderButtonsData();
      setFlag(true);
    }

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

    const [orderData, setOrderData] = useState<IOrder[]>()

    const getOrderData = () => {
      orderButtons?.map((OrderButton) => {
        if (OrderButton.isHighlighted === true) {
          setOrderData(orders.at(OrderButton.id)?.sent);
        }
      })
    }
  
    const toggleOrderButton = (id : number) => {
      setOrderButtons(orderButtons?.map((OrderButton) => OrderButton.id === id ?
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
        <OrderButtons 
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
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchOrderRequest } from "../actions";
import { RootState } from "../reducers/rootReducer";
import BouncingDotsLoader from './BouncingDotsLoader';
import { IOrder } from "../types";
import Order from "./Order";

type orderDataType = {
    sent: IOrder[]
}

type subTabButtonState = {
    id: number
    text: string
    isHighlighted: boolean
}

type subTabButtonsProps = {
    orderButtons: subTabButtonState[]
    subTabButtons: subTabButtonState[]
    toggleSubTabButton: Function
}

const RecentOrders = ( {subTabButtons, toggleSubTabButton, orderButtons} : subTabButtonsProps ) => {
    const dispatch = useDispatch();
    const {pending, orders } = useSelector(
        (state: RootState) => state.order
    );

    useEffect(() => {
        dispatch(fetchOrderRequest());
    }, []);

    console.log(orders);

    const [hover, setHover] = useState(false);
    const [hoverSecond, setHoverSecond] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    const toggleIsLoading = () => {
        setIsLoaded(true);
    };

    useEffect(() => {
    }, [setIsLoaded]);

    setTimeout(() => {toggleIsLoading()}, 2000);

    const subTabButtonStyleFirst =  {
        backgroundColor: `${subTabButtons.at(0)?.isHighlighted ? '#FFFFFF' : '#7D869A'}`,
        color: `${subTabButtons.at(0)?.isHighlighted ? '#3A3A3A' : '#FFFFFF'}`,
        cursor: 'pointer',
        transition: 'all 200ms',
        "&:hover": {
            backgroundColor: `${subTabButtons.at(0)?.isHighlighted ? '#F0F0F0' : '#636a7a'}`,
            color: `${subTabButtons.at(0)?.isHighlighted ? '#3A3A3A' : '#FFFFFF'}`,
            cursor: 'pointer',
            transition: 'all 200ms',
    }}

    const subTabButtonStyleSecond =  {
        backgroundColor: `${subTabButtons.at(1)?.isHighlighted ? '#FFFFFF' : '#7D869A'}`,
        color: `${subTabButtons.at(1)?.isHighlighted ? '#3A3A3A' : '#FFFFFF'}`,
        cursor: 'pointer',
        transition: 'all 200ms',
        "&:hover": {
            backgroundColor: `${subTabButtons.at(1)?.isHighlighted ? '#F0F0F0' : '#636a7a'}`,
            color: `${subTabButtons.at(1)?.isHighlighted ? '#3A3A3A' : '#FFFFFF'}`,
            cursor: 'pointer',
            transition: 'all 200ms',
    }}
    console.log(orders.orders_A.sent);
    return (
        <div>
            <div className='recent-orders-container'>
                <div className='recent-orders-header'>
                    <button className='recent-orders-button-first'
                            onMouseEnter={()=>{
                                setHover(true);
                            }}
                            onMouseLeave={()=>{
                                setHover(false);
                            }}
                            style={hover ? subTabButtonStyleFirst["&:hover"] : subTabButtonStyleFirst} 
                            onClick={() => toggleSubTabButton(subTabButtons.at(0)?.id, 
                            setIsLoaded(false), setTimeout(() => {toggleIsLoading()}, 2000))}
                    ><a>{subTabButtons.at(0)?.text}</a></button>

                    <button className='recent-orders-button-second' 
                            onMouseEnter={()=>{
                                setHoverSecond(true);
                            }}
                            onMouseLeave={()=>{
                                setHoverSecond(false);
                            }}
                            style={hoverSecond ? subTabButtonStyleSecond["&:hover"] : subTabButtonStyleSecond} 
                            onClick={() => toggleSubTabButton(subTabButtons.at(1)?.id, 
                            setIsLoaded(false), setTimeout(() => {toggleIsLoading()}, 2000))}
                    ><a>{subTabButtons.at(1)?.text}</a></button>

                    <text className='recent-orders-header-text'>RECENT ORDERS</text>
                </div>
                {subTabButtons.at(0)?.isHighlighted && orderButtons.at(2)?.isHighlighted ? 
                <div className='recent-orders-categories'>
                    <text className='recent-orders-categories-date'>DATE & TIME</text>
                    <text className='recent-orders-categories-subject'>SUBJECT</text>
                    <text className='recent-orders-categories-type'>COMMUNICATION TYPE</text>
                    <text className='recent-orders-categories-number'>ORDER #</text>
                    
                    {orders.orders_AAA.sent.map((order) => (
                        <Order key={order.id} sent={order} />
                    ))}
                </div> : '' }
            </div>
            {subTabButtons.at(1)?.isHighlighted || !orderButtons.at(2)?.isHighlighted ? 
            <div className='no-items'>
                {isLoaded ? 
                    <div>
                        <text>No Items</text>
                    </div> : 
                    <div>
                        <BouncingDotsLoader />
                    </div>
                }             
            </div> : '' }
        </div>
    )
}

export default RecentOrders
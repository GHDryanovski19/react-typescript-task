import {useEffect, useState } from "react";
import BouncingDotsLoader from './BouncingDotsLoader'
import Order from "./Order";
import axios from "axios";

type orderDataType = {
    sent: {
        id: number
        order_id: number
        sent_dt: string
        sent_tm: string
        subject: {
            title: string
            email: string
        }
        type: string
    }[]
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
    const ordersUrl = 'https://evoteam-verasoft.github.io/data/orders.json'
    const [ordersData, setOrdersData] = useState<orderDataType>();

    useEffect(() => {
        getOrdersData();
    }, []);
  

    const getOrdersData = () => {
    axios.get(`${ordersUrl}`)
    .then((res) => {
        setOrdersData(res.data.orders_AAA);
    })
    .catch(error => console.error(`Error: ${error}`));
    }

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
                    {ordersData?.sent?.map((order) => (
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
import {useEffect, useState } from "react";
import BouncingDotsLoader from './BouncingDotsLoader'
import data from '../data/orders.json'

type subTabButtonState = {
    id : number
    text : string
    isHighlighted : boolean
}

type subTabButtonsProps = {
    orderButtons: subTabButtonState[]
    subTabButtons: subTabButtonState[]
    toggleSubTabButton: Function
}

const RecentOrders = ({subTabButtons, toggleSubTabButton, orderButtons } : subTabButtonsProps ) => {
    
    const [hover, setHover] = useState(false);
    const [hoverSecond, setHoverSecond] = useState(false);
    const [resendHover, setResendHover] = useState(false);
    const [resendHoverSecond, setResendHoverSecond] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    const toggleIsLoading = () => {
        setIsLoaded(true);
    };

    useEffect(() => {
    console.log('isLoading is: ', setIsLoaded);
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
        },

    }

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
        },
    }

    const resendButtonStyle = {
        backgroundColor: '#7D869A',
        cursor: 'pointer',
        transition: 'all 200ms',
        "&:hover" : {
            backgroundColor: '#636a7a',
            cursor: 'pointer',
            transition: 'all 200ms',
        }
    }

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
                            setIsLoaded(false) ,setTimeout(() => {toggleIsLoading()}, 2000))}
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
                            setIsLoaded(false) , setTimeout(() => {toggleIsLoading()}, 2000))}
                    ><a>{subTabButtons.at(1)?.text}</a></button>

                    <text className='recent-orders-header-text'>RECENT ORDERS</text>
                </div>
                {subTabButtons.at(0)?.isHighlighted && orderButtons.at(2)?.isHighlighted ? 
                    <div className='recent-orders-categories'>
                        <text className='recent-orders-categories-date'>DATE & TIME</text>
                        <text className='recent-orders-categories-subject'>SUBJECT</text>
                        <text className='recent-orders-categories-type'>COMMUNICATION TYPE</text>
                        <text className='recent-orders-categories-number'>ORDER #</text>
                        <div className='recent-orders-top-order'>
                            <div className='recent-orders-order-time-container'>
                                <text>{data.orders_AAA.sent.at(0)?.sent_dt}</text>
                                <text className='recent-orders-order-small-text'>{data.orders_AAA.sent.at(0)?.sent_tm}</text>
                            </div>
                            <div className='recent-orders-subject-container'>
                                <text>{data.orders_AAA.sent.at(0)?.subject.title}</text>
                                <text className='recent-orders-order-small-text'>{data.orders_AAA.sent.at(0)?.subject.email}</text>
                            </div>
                            <div className='recent-orders-order-type-container'>
                                <text>{data.orders_AAA.sent.at(0)?.type}</text>
                                <text className='recent-orders-order-number-top'>{data.orders_AAA.sent.at(0)?.order_id}</text>
                            </div>
                            <button
                                onMouseEnter={()=>{
                                    setResendHover(true);
                                }}
                                onMouseLeave={()=>{
                                    setResendHover(false);
                                }}
                                style={resendHover ? resendButtonStyle["&:hover"] : resendButtonStyle}
                                className='recent-orders-resend-button'>RESEND</button>
                        </div>
                        <div className='recent-orders-bottom-order'>
                        <div className='recent-orders-order-time-container'>
                                <text>{data.orders_AAA.sent.at(1)?.sent_dt}</text>
                                <text className='recent-orders-order-small-text'>{data.orders_AAA.sent.at(1)?.sent_tm}</text>
                            </div>
                            <div className='recent-orders-subject-container'>
                                <text>{data.orders_AAA.sent.at(1)?.subject.title}</text>
                                <text className='recent-orders-order-small-text'>{data.orders_AAA.sent.at(1)?.subject.email}</text>
                            </div>
                            <div className='recent-orders-order-type-container'>
                                <text>Order Receipt Email</text>
                                <text className='recent-orders-order-number-bottom'>{data.orders_AAA.sent.at(1)?.order_id}</text>
                            </div>
                            <button
                                onMouseEnter={()=>{
                                    setResendHoverSecond(true);
                                }}
                                onMouseLeave={()=>{
                                    setResendHoverSecond(false);
                                }}
                                style={resendHoverSecond ? resendButtonStyle["&:hover"] : resendButtonStyle}
                                className='recent-orders-resend-button'>RESEND</button>
                        </div> 
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
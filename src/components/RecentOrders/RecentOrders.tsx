import { useEffect, useState } from 'react';
import Loader from '../BouncingDotsLoader/Loader';
import Order from '../Order/Order';
import { subTabButtonsProps } from '../../types';
import style from './RecentOrders.module.scss'

const RecentOrders = ( {subTabButtons, toggleSubTabButton, orderData} : subTabButtonsProps ) => {
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
            <div className={style['recent-orders-container']}>
                <div className={style['header']}>
                    <button className={style['btn-first']}
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

                    <button className={style['btn-second']}
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

                    <text className={style['text']}>RECENT ORDERS</text>
                </div>
                {orderData != undefined && subTabButtons.at(0)?.isHighlighted ?
                <div className={style['orders']}>
                    <div className={style['categories']}>
                        <text className={style['date']}>DATE & TIME</text>
                        <text className={style['subject']}>SUBJECT</text>
                        <text className={style['type']}>COMMUNICATION TYPE</text>
                        <text className={style['number']}>ORDER #</text>
                    </div>

                    {orderData?.map((order) => (
                        <Order key={order.id} sent={order} />
                    ))}
                </div> : 
                <div className={style['no-items']}>
                {isLoaded ? 
                    <div>
                        <text>No Items</text>
                    </div> : 
                    <div>
                        <Loader />
                    </div>
                }             
                </div> 
                }
            </div>
        </div>
    )
}

export default RecentOrders
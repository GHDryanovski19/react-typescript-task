import { orderData } from '../../types';
import style from './Order.module.scss'

const Order = ( { sent } : orderData ) => {
    let isOdd : boolean = false;
    if (sent?.id !== undefined) {
          isOdd = sent.id % 2 === 0 ? true : false
    }

    let dateSent: string = '';
    let  months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let sentDate : string[] | undefined = sent?.sent_dt?.split('-');
    if (sentDate !== undefined) {
        const sentDateDay = new Date(parseInt(sentDate[0], 10), parseInt(sentDate[1], 10), parseInt(sentDate[2], 10))
        let month = parseInt(sentDate[1], 10);
        dateSent = sentDateDay.toLocaleDateString('en-US', {
            weekday: 'short',
        }) + ', ' + months[month] + ' ' + month;
    }

    const timeString : string | undefined = sent?.sent_tm;

    const timeString12hr = new Date('1970-01-01T' + timeString + 'Z')
    .toLocaleTimeString('en-US',
        {timeZone:'UTC',hour12:true,hour:'numeric',minute:'numeric'}
    );
    
    return (
        <div className={isOdd ? `${style['recent-orders-order']} ${style['bottom-order']}`  
                              : `${style['recent-orders-order']} ${style['top-order']}`}>
            <div className={style['time-container']}>
                <text>{dateSent}</text>
                <text className={style['small-text']}>{timeString12hr}</text>
            </div>
            <div className={style['subject-container']}>
                <text>{sent?.subject.title}</text>
                <br></br>
                <text className={style['small-text']}>{sent?.subject.email}</text>
            </div>
            <div className={style['type-container']}>
                <text>{sent?.type}</text>
            </div>
            <div className={style['number-container']}>
                <text>{sent?.order_id}</text>
            </div>
            <button className={style['resend-button']}>RESEND</button>
        </div>
    )
}

export default Order
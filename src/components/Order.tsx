import { useState } from 'react'

type orderData = {
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
    } | undefined
}

const Order = ( { sent } : orderData ) => {
    let isOdd : boolean = false;
    if (sent?.id != undefined) {
          isOdd = sent.id % 2 == 0 ? true : false
    }
    
    let dateSent: string = '';

    var  months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    var sentDate : string[] | undefined = sent?.sent_dt?.split('-');
    if (sentDate != undefined) {
        const sentDateDay = new Date(parseInt(sentDate[0], 10), parseInt(sentDate[1], 10), parseInt(sentDate[2], 10))
        var month = parseInt(sentDate[1], 10);
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
    <div className={isOdd ? 'recent-orders-bottom-order' : 'recent-orders-top-order'}>
        <div className='recent-orders-order-time-container'>
            <text>{dateSent}</text>
            <text className='recent-orders-order-small-text'>{timeString12hr}</text>
        </div>
        <div className='recent-orders-subject-container'>
            <text>{sent?.subject.title}</text>
            <br></br>
            <text className='recent-orders-order-small-text'>{sent?.subject.email}</text>
        </div>
        <div className='recent-orders-order-type-container'>
            <text>{sent?.type}</text>
            <text className={isOdd ? 'recent-orders-order-number-bottom' : 'recent-orders-order-number-top'}>{sent?.order_id}</text>
        </div>
        <button className='recent-orders-resend-button'>RESEND</button>
    </div>
  )
}

export default Order
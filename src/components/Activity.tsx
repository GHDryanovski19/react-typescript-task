type activityType = {
    sms: number | undefined
    email: number | undefined
    orders: number | undefined
}

const Activity = ( {sms, email, orders} :activityType ) => {
    return (
        <div className='activity-container'>
            <div className='activity-container-header'>
            <text className='activity-container-header-text'>90-DAY COMMUNICATION ACTIVITY</text>
            </div>

            <div className='activity-container-stat'>
                <text className='activity-container-stat-number'>{sms}</text>
                <div className='activity-container-stat-rect'>SMS</div>
            </div>
            
            <div className='activity-container-stat'>
                <text className='activity-container-stat-number'>{email}</text>
                <div className='activity-container-stat-rect'>EMAIL</div>
            </div>

            <div className='activity-container-stat'>
                <text className='activity-container-stat-number'>{orders}</text>
                <div className='activity-container-stat-rect'>ORDERS</div>
            </div>
        </div>
    )
}

export default Activity
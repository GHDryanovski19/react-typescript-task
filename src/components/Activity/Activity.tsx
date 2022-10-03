import { activityType } from '../../types';
import style from './Activity.module.scss'

const Activity = ( { activity } : activityType ) => {
    return (
        <div className={style['activity-container']}>
            <div className={style['header']}>
                <text className={style['text']}>90-DAY COMMUNICATION ACTIVITY</text>
            </div>

            <div className={style['stat']}>
                <text className={style['number']}>{activity.sms}</text>
                <div className={style['rect']}>SMS</div>
            </div>
            
            <div className={style['stat']}>
                <text className={style['number']}>{activity.email}</text>
                <div className={style['rect']}>EMAIL</div>
            </div>

            <div className={style['stat']}>
                <text className={style['number']}>{activity.orders}</text>
                <div className={style['rect']}>ORDERS</div>
            </div>
        </div>
    )
}

export default Activity
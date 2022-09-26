import { activityType } from '../../types';
import style from './Activity.module.scss'

const Activity = ( { activity } : activityType ) => {
    return (
        <div className={style['activity-container']}>
            <div className={style['activity-container-header']}>
                <text className={style['activity-container-header-text']}>90-DAY COMMUNICATION ACTIVITY</text>
            </div>

            <div className={style['activity-container-stat']}>
                <text className={style['activity-container-stat-number']}>{activity.sms}</text>
                <div className={style['activity-container-stat-rect']}>SMS</div>
            </div>
            
            <div className={style['activity-container-stat']}>
                <text className={style['activity-container-stat-number']}>{activity.email}</text>
                <div className={style['activity-container-stat-rect']}>EMAIL</div>
            </div>

            <div className={style['activity-container-stat']}>
                <text className={style['activity-container-stat-number']}>{activity.orders}</text>
                <div className={style['activity-container-stat-rect']}>ORDERS</div>
            </div>
        </div>
    )
}

export default Activity
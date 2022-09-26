import { FaRegUser } from 'react-icons/fa'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaRegBuilding } from 'react-icons/fa'
import { FaHome } from 'react-icons/fa'
import { FaRegEnvelope } from 'react-icons/fa'
import { userDataType } from '../../types'
import style from './UserData.module.scss'

const UserData = ( {gender, birth_date, id, mobile_phone, work_phone, home_phone, email} : userDataType ) => {

    function getAge (birthDate : string) {
        return Math.floor((Math.abs(Date.now() - new Date(birthDate).getTime())/(1000 * 3600 * 24)/365.25));
    }

    return (
        <div className={style['user-data-container']}>
            <div className={style['user-data-first']}>
                <FaRegUser className={style['user-data-first-icon']} />
                <text className={style['user-data-first-text']}>{gender + ' - ' + getAge(birth_date)}</text>
            </div>
            <div className={style['user-data-second']}>
                <div className={`${style['user-data-second-rows-container']} ${style['user-data-second-rows-container-margin-first']}`}>
                    <FaRegUser className={style['user-data-second-icon']}/>
                    <text>{'#' + id}</text>
                </div>
                <div className={`${style['user-data-second-rows-container']} ${style['user-data-second-rows-container-margin-first']}`}>
                    <FaPhoneAlt className={style['user-data-second-icon']}/>
                    <text>{mobile_phone}</text>
                </div>
                <div className={`${style['user-data-second-rows-container']} ${style['user-data-second-rows-container-margin-second']}`}>
                    <FaRegBuilding className={style['user-data-second-icon']}/>
                    <text>{work_phone}</text>
                </div>
                <div className={`${style['user-data-second-rows-container']} ${style['user-data-second-rows-container-margin-second']}`}>
                    <FaHome className={style['user-data-second-icon']}/>
                    <text>{home_phone}</text>
                </div>
                <div className={`${style['user-data-second-rows-container']} ${style['user-data-second-rows-container-margin-second']}`}>
                    <FaRegEnvelope className={style['user-data-second-icon']}/>
                    <text>{email}</text>
                </div>
            </div>
        </div>
    )
}

export default UserData
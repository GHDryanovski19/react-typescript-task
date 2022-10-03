import { FaRegUser } from 'react-icons/fa'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaRegBuilding } from 'react-icons/fa'
import { FaHome } from 'react-icons/fa'
import { FaRegEnvelope } from 'react-icons/fa'
import { userDataType } from '../../types'
import style from './UserData.module.scss'

const UserData = ( {gender, birth_date, id, mobile_phone, work_phone, home_phone, email, photo_url} : userDataType ) => {

    function getAge (birthDate : string) {
        return Math.floor((Math.abs(Date.now() - new Date(birthDate).getTime())/(1000 * 3600 * 24)/365.25));
    }

    return (
        <div className={style['user-data-container']}>
            <div className={style['first']}>
                {photo_url !== null ?
                    <img src={photo_url}></img> :
                    <FaRegUser className={style['icon']} />
                }
                <text className={style['text']}>{gender + ' - ' + getAge(birth_date)}</text>
            </div>
            <div className={style['second']}>
                <div className={`${style['rows-container']} ${style['margin-first']}`}>
                    <FaRegUser className={style['icon']}/>
                    <text>{'#' + id}</text>
                </div>
                <div className={`${style['rows-container']} ${style['margin-first']}`}>
                    <FaPhoneAlt className={style['icon']}/>
                    <text>{mobile_phone}</text>
                </div>
                <div className={`${style['rows-container']} ${style['margin-second']}`}>
                    <FaRegBuilding className={style['icon']}/>
                    <text>{work_phone}</text>
                </div>
                <div className={`${style['rows-container']} ${style['margin-second']}`}>
                    <FaHome className={style['icon']}/>
                    <text>{home_phone}</text>
                </div>
                <div className={`${style['rows-container']} ${style['margin-second']}`}>
                    <FaRegEnvelope className={style['icon']}/>
                    <text>{email}</text>
                </div>
            </div>
        </div>
    )
}

export default UserData
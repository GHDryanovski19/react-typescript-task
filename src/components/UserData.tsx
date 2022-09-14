import { FaRegUser } from 'react-icons/fa'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaRegBuilding } from 'react-icons/fa'
import { FaHome } from 'react-icons/fa'
import { FaRegEnvelope } from 'react-icons/fa'
import { userDataType } from '../types'

const UserData = ( {gender, birth_date, id, mobile_phone, work_phone, home_phone, email} : userDataType ) => {

    let timeDiff = Math.abs(Date.now() - new Date(birth_date).getTime());
    let age = Math.floor((timeDiff/(1000 * 3600 * 24)/365.25));

    return (
        <div className='user-data-container'>
            <div className='user-data-first'>
                <FaRegUser className='user-data-first-icon' />
                <text className='user-data-first-text'>{gender + ' - ' + age}</text>
            </div>
            <div className='user-data-second'>
                <div className='user-data-second-rows-container user-data-second-rows-container-margin-first'>
                    <FaRegUser className='user-data-second-icon'/>
                    <text>{'#' + id}</text>
                </div>
                <div className='user-data-second-rows-container user-data-second-rows-container-margin-first'>
                    <FaPhoneAlt className='user-data-second-icon'/>
                    <text>{mobile_phone}</text>
                </div>
                <div className='user-data-second-rows-container user-data-second-rows-container-margin-second'>
                    <FaRegBuilding className='user-data-second-icon'/>
                    <text>{work_phone}</text>
                </div>
                <div className='user-data-second-rows-container user-data-second-rows-container-margin-second'>
                    <FaHome className='user-data-second-icon'/>
                    <text>{home_phone}</text>
                </div>
                <div className='user-data-second-rows-container user-data-second-rows-container-margin-second'>
                    <FaRegEnvelope className='user-data-second-icon'/>
                    <text>{email}</text>
                </div>
            </div>
        </div>
    )
}

export default UserData
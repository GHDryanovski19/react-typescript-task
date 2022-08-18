import { FaRegUser } from 'react-icons/fa'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaRegBuilding } from 'react-icons/fa'
import { FaHome } from 'react-icons/fa'
import { FaRegEnvelope } from 'react-icons/fa'

import data from '../data/header.json'

const UserData = () => {
  return (
    <div className='user-data-container'>
        <div className='user-data-first'>
            <FaRegUser className='user-data-first-icon' />
            <text className='user-data-first-text'>{data.gender + ' - ' + data.age}</text>
        </div>
        <div className='user-data-second'>
            <div className='user-data-second-rows-container'>
                <FaRegUser className='user-data-second-icon'/>
                <text>{'#' + data.id}</text>
            </div>
            <div className='user-data-second-rows-container'>
                <FaPhoneAlt className='user-data-second-icon'/>
                <text>{data.mobile_phone}</text>
            </div>
            <div className='user-data-second-rows-container'>
                <FaRegBuilding className='user-data-second-icon'/>
                <text>{data.work_phone}</text>
            </div>
            <div className='user-data-second-rows-container'>
                <FaHome className='user-data-second-icon'/>
                <text>{data.home_phone}</text>
            </div>
            <div className='user-data-second-rows-container'>
                <FaRegEnvelope className='user-data-second-icon'/>
                <text>{data.email}</text>
            </div>
        </div>
    </div>
  )
}

export default UserData
import { FaRegUser } from 'react-icons/fa'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaRegBuilding } from 'react-icons/fa'
import { FaHome } from 'react-icons/fa'
import { FaRegEnvelope } from 'react-icons/fa'

type userDataType = {
    gender: string | undefined
    birth_date: string | undefined
    id: number | undefined
    mobile_phone: string | undefined
    work_phone: string | undefined
    home_phone: string | undefined
    email: string | undefined
}

const UserData = ( {gender, birth_date, id, mobile_phone, work_phone, home_phone, email} : userDataType ) => {
    var birthDate = birth_date;
    const birthInfo = String(birthDate).split('-')

    var birthYear = parseInt(birthInfo[0]);
    var birthMonth = parseInt(birthInfo[1]);
    var birthDay = parseInt(birthInfo[2]);

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');

    var todayYear = today.getFullYear();
    var todayMonth = parseInt(mm);
    var todayDay = parseInt(dd);

    var age = todayYear - birthYear;
    var months = todayMonth - birthMonth;
    if (months < 0 || (months === 0 && todayDay < birthDay)) {
        age--;
    }

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
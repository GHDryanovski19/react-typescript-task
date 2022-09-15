import { smsStatusType } from '../types';

const SmsStatus = ( {status, since} : smsStatusType) => {
    var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    var splitTime = since.split('T');
    var sinceDate : string[] = splitTime[0].split('-');
    var month = parseInt(sinceDate[2]);
    let dateText = 'SINCE ' + months[month] + ' ' + month + ', ' + sinceDate[0];

    return (
        <div className={status === "IN" ? 'sms-status-container sms-in' : 'sms-status-container sms-out'}>
          <text className='sms-status-container-header'>SMS CARRIER STATUS</text>
          <text className='sms-status-container-text'>{status}</text>
          <div className='sms-status-container-stat-rect'>{dateText}</div>  
        </div>
    )
}

export default SmsStatus
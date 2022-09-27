import { smsStatusType } from '../../types';
import style from './SmsStatus.module.scss'

const SmsStatus = ( {status, since} : smsStatusType) => {

  function formatDate (str : string) {
    let months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    let splitTime = since.split('T');
    let sinceDate : string[] = splitTime[0].split('-');
    let month = parseInt(sinceDate[2]);
    return 'SINCE ' + months[month] + ' ' + month + ', ' + sinceDate[0];
  }

  return (
      <div className={status === "IN" ? `${style['sms-status-container']} ${style['sms-in']}` : `${style['sms-status-container']} ${style['sms-out']}`}>
        <text className={style['header']}>SMS CARRIER STATUS</text>
        <text className={style['text']}>{status}</text>
        <div className={style['stat-rect']}>{formatDate(since)}</div>  
      </div>
  )
}

export default SmsStatus
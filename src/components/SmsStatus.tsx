import data from '../data/header.json'

const SmsStatus = () => {
    return (
        <div className='sms-status-container'>
          <text className='sms-status-container-header'>SMS CARRIER STATUS</text>
          <text className='sms-status-container-text'>{data.carrier_status.status}</text>
          <div className='sms-status-container-stat-rect'>{data.carrier_status.since}</div>  
        </div>
    )
}

export default SmsStatus
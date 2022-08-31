type smsStatusType = {
  status: string | undefined
  since: string | undefined
}

const SmsStatus = ( {status, since} : smsStatusType) => {
  var  months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

  let dateText: string = "unidentified";

  var splitTime = since?.split('T');
  if (splitTime != undefined) {
    var sinceDate : string[] | undefined = splitTime[0]?.split('-');
    var month = parseInt(sinceDate[2]);
    dateText = 'SINCE ' + months[month] + ' ' + month + ', ' + sinceDate[0];
  }
    return (
        <div className='sms-status-container'>
          <text className='sms-status-container-header'>SMS CARRIER STATUS</text>
          <text className='sms-status-container-text'>{status}</text>
          <div className='sms-status-container-stat-rect'>{dateText}</div>  
        </div>
    )
}

export default SmsStatus
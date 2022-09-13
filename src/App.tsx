import {useState, useEffect} from "react"
import { IoCloseSharp } from 'react-icons/io5'
import Header from "./components/Header";
import UserData from "./components/UserData";
import Activity from "./components/Activity";
import SmsStatus from "./components/SmsStatus";
import OrdersButtons from "./components/OrdersButtons";
import RecentOrders from "./components/RecentOrders";
import axios from "axios";

type summaryDataType = {
  id : number
  first_name: string
  last_name: string
  photo_url: null
  gender: string
  birth_date: string
  home_phone: string
  mobile_phone: string
  work_phone: string
  email: string
  activity: {
    sms: number
    email: number
    orders: number
  }
  carrier_status: {
    since: string
    status: string
  }
}

function App() {
  const summaryUrl = 'https://evoteam-verasoft.github.io/data/summary.json';
  const [summaryData, setSummaryData] = useState<summaryDataType>();

  useEffect(() => {
    getSummaryData();
  }, []);
  
  const getSummaryData = () => {
    axios.get(`${summaryUrl}`)
    .then((res) => {
      setSummaryData(res.data);
    })
    .catch(error => console.error(`Error: ${error}`));
  }

  const [orderButtons, setOrderButton] = useState([
    {
      id: 1,
      text: 'ORDERS A',
      isHighlighted: true,
    },
    {
      id: 2,
      text: 'ORDERS AA',
      isHighlighted: false,
    },
    {
      id: 3,
      text: 'ORDERS AAA',
      isHighlighted: false,
    },
    {
      id: 4,
      text: 'ORDERS B',
      isHighlighted: false,
    },
    {
      id: 5,
      text: 'ORDERS C',
      isHighlighted: false,
    }
  ])

  const [subTabButtons, setSubTabButtons] = useState ([
    {
      id: 1,
      text: 'SENT',
      isHighlighted: true,
    },
    {
      id: 2,
      text: 'ERRORS',
      isHighlighted: false,
    },
  ])

  const toggleOrderButton = (id : number) => {
    setOrderButton(orderButtons.map((OrderButton) => OrderButton.id === id ?
    { ...OrderButton, isHighlighted: true} : 
    { ...OrderButton, isHighlighted: false}))
  }

  const toggleSubTabButton = (id : number) => {
    setSubTabButtons(subTabButtons.map((subTabButton) => subTabButton.id === id ?
    { ...subTabButton, isHighlighted: true} : 
    { ...subTabButton, isHighlighted: false}))
  }

  const [newOrder, setNewOrder] = useState(false);

  const changeOrderState = () => {
    setNewOrder(current => !current);
  }

  return (
    <div className="App">
      <div className={newOrder ? "" : "display-none"}>
        <div className="blurred-screen-loader-container"></div>
        <div className="blurred-screen-loader-x-position">
          <IoCloseSharp className="x-icon" onClick={() => changeOrderState()}/>
        </div>
        <div className="blurred-screen-loader-position">
            <div className="spinner-loader"></div>
        </div>
        <div className="blurred-screen-loader-position-text">
          <text>Processing</text>
        </div>
      </div>

      <Header
        newOrder={changeOrderState} 
        first_name={summaryData?.first_name} 
        last_name={summaryData?.last_name}/>

      <hr className="header-container-hr"></hr>

      <UserData 
        gender={summaryData?.gender}
        birth_date={summaryData?.birth_date}
        id={summaryData?.id}
        mobile_phone={summaryData?.mobile_phone}
        work_phone={summaryData?.work_phone}
        home_phone={summaryData?.home_phone}
        email={summaryData?.email}/>

      <Activity 
        sms={summaryData?.activity.sms}
        email={summaryData?.activity.email}
        orders={summaryData?.activity.orders}/>

      <SmsStatus 
        status={summaryData?.carrier_status.status}
        since={summaryData?.carrier_status.since}/>

      <hr className="sms-status-container-hr"></hr>

      <OrdersButtons 
        orderButtons={orderButtons} 
        toggleOrderButton={toggleOrderButton}/>

      <hr className="order-buttons-container-hr"></hr>

      <RecentOrders 
        subTabButtons={subTabButtons}
        toggleSubTabButton={toggleSubTabButton} 
        orderButtons={orderButtons}/>
    </div>
  );
}

export default App;

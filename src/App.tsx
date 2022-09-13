import {useState, useEffect} from "react"
import { IoCloseSharp } from 'react-icons/io5'
import Header from "./components/Header";
import UserData from "./components/UserData";
import Activity from "./components/Activity";
import SmsStatus from "./components/SmsStatus";
import OrdersButtons from "./components/OrdersButtons";
import RecentOrders from "./components/RecentOrders";
import { IUser } from "./types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./reducers/rootReducer";
import { fetchUserRequest } from "./actions";
import axios from "axios";

function App() {
  const summaryUrl = 'https://evoteam-verasoft.github.io/data/summary.json';
  const [userData, setUserData] = useState<IUser>();

  useEffect(() => {
    getuserData();
  }, []);
  
  const getuserData = () => {
    axios.get(`${summaryUrl}`)
    .then((res) => {
      setUserData(res.data);
    })
    .catch(error => console.error(`Error: ${error}`));
  }

  const dispatch = useDispatch();

    const {pending, user } = useSelector(
        (state: RootState) => state.user
    );

    useEffect(() => {
        // dispatch(fetchOrderRequest());
        dispatch(fetchUserRequest());
    }, []);
    console.log(user);


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
        first_name={userData?.first_name} 
        last_name={userData?.last_name}/>

      <hr className="header-container-hr"></hr>

      <UserData 
        gender={userData?.gender}
        birth_date={userData?.birth_date}
        id={userData?.id}
        mobile_phone={userData?.mobile_phone}
        work_phone={userData?.work_phone}
        home_phone={userData?.home_phone}
        email={userData?.email}/>

      <Activity 
        sms={userData?.activity.sms}
        email={userData?.activity.email}
        orders={userData?.activity.orders}/>

      <SmsStatus 
        status={userData?.carrier_status.status}
        since={userData?.carrier_status.since}/>

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

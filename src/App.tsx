import axios from "axios";
import {useState} from "react"
import { IoCloseSharp } from 'react-icons/io5'
import Header from "./components/Header";
import UserData from "./components/UserData";
import Activity from "./components/Activity";
import SmsStatus from "./components/SmsStatus";
import OrdersButtons from "./components/OrdersButtons";
import RecentOrders from "./components/RecentOrders";

function App() {

  // TODO: REQUIRES IMPLEMENTATION
  const getData = () => {
    axios.get('https://evoteam-verasoft.github.io/data/summary.json')
    .then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  }

  const [orderButtons, setOrderButton] = useState(
      [
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

  const [subTabButtons, setSubTabButtons] = useState (
    [
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
    ]
  )

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

  const [xHover, setXHover] = useState(false);

  const xIconStyle = {
    opacity: '1',
    transition: 'all 200ms',
    "&:hover": {
      opacity: '0.7',
      transition: 'all 200ms',
    }
  }

  return (
    <div className="App">
      <div className={newOrder ? "" : "display-none"}>
        <div className="blurred-screen-loader-container"></div>
        <div className="blurred-screen-loader-x-position">
          <IoCloseSharp 
            onMouseEnter={()=>{
                setXHover(true);
            }}
            onMouseLeave={()=>{
              setXHover(false);
            }}
            style={xHover ? xIconStyle["&:hover"] : xIconStyle}
            className="x-icon" onClick={() => changeOrderState()}/>
        </div>
        <div className="blurred-screen-loader-position">
            <div className="spinner-loader"></div>
        </div>
        <div className="blurred-screen-loader-position-text">
          <text>Processing</text>
        </div>
      </div>

      <Header newOrder={changeOrderState} />
      <hr className="header-container-hr"></hr>
      <UserData />
      <Activity />
      <SmsStatus />
      <hr className="sms-status-container-hr"></hr>
      <OrdersButtons orderButtons={orderButtons} toggleOrderButton={toggleOrderButton}/>
      <hr className="order-buttons-container-hr"></hr>
      <RecentOrders subTabButtons={subTabButtons} toggleSubTabButton={toggleSubTabButton} orderButtons={orderButtons}/>
    </div>
  );
}

export default App;

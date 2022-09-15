import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserRequest } from '../actions';
import { RootState } from '../reducers/rootReducer';
import LoadingScreen from './LoadingScreen';
import Header from './Header';
import UserData from './UserData';
import Activity from './Activity';
import SmsStatus from './SmsStatus';

const Dashboard = () => {
    const dispatch = useDispatch();
    const {pending, user } = useSelector(
        (state: RootState) => state.user
    );

    useEffect(() => {
        dispatch(fetchUserRequest());
    }, []);

    const [newOrder, setNewOrder] = useState(false);

    const changeOrderState = () => {
      setNewOrder(current => !current);
    }
    
    return (
        <div>
            {typeof user['id'] !="undefined" ? (
                <div>
                    <LoadingScreen isVisible={newOrder} functionality={changeOrderState} />

                    <Header
                        newOrder={changeOrderState} 
                        first_name={user['first_name']} 
                        last_name={user['last_name']}/>

                    <hr className="header-container-hr"></hr>

                    <UserData 
                        gender={user['gender']}
                        birth_date={user['birth_date']}
                        id={user['id']}
                        mobile_phone={user['mobile_phone']}
                        work_phone={user['work_phone']}
                        home_phone={user['home_phone']}
                        email={user['email']}/>

                    <Activity activity={user['activity']}/>

                    <SmsStatus 
                        status={user['carrier_status']['status']}
                        since={user['carrier_status']['since']}/>
                </div>
            ):<div>{pending}</div>}
        </div>
    )
}

export default Dashboard
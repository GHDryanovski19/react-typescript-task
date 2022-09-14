import {reduxActionTypes} from "./actionTypes";

export type LoadingScreenType = {
    isVisible: boolean;
    functionality: Function;
}

export type userDataType = {
    gender: string;
    birth_date: string;
    id: number;
    mobile_phone: string;
    work_phone: string;
    home_phone: string;
    email: string;
}

export type activityType = {
    activity:{
        sms: number;
        email: number;
        orders: number;
    }
}

export type smsStatusType = {
    status: string;
    since: string;
}

export interface IUser {
    id: number;
    first_name: string;
    last_name: string;
    photo_url: string;
    gender: string;
    birth_date:string;
    home_phone: string;
    mobile_phone: string;
    work_phone: string;
    email: string;
    activity:{
        sms: number,
        email: number,
        orders: number
    };
    carrier_status:{
        since: string,
        status: string
    };
}
export interface IOrder {
    id: number;
    order_id:number;
    sent_dt: string;
    sent_tm: string;
    subject:{
        title: string,
        email:string
    };
    type:string;
}

export interface IOrders {
    "orders_A" : {sent: IOrder[]},
    "orders_AA" :{sent: IOrder[]},
    "orders_AAA" : {sent: IOrder[]},
    "orders_B" : {sent: IOrder[]},
    "orders_C" : {sent: IOrder[]},
}

export interface UserState {
    pending: boolean;
    user: IUser[];
}

export interface OrderState {
    pending: boolean;
    orders: IOrders;
}

export interface FetchUserSuccessPayload {
    user: IUser;
}
export interface FetchOrderSuccessPayload {
    orders: IOrders;
}


export interface FetchUserRequest {
    type: typeof reduxActionTypes.FETCH_USER_REQUEST;
}
export interface FetchOrderRequest {
    type: typeof reduxActionTypes.FETCH_ORDER_REQUEST;
}

export type FetchUserSuccess = {
    type: typeof reduxActionTypes.FETCH_USER_SUCCESS;
    payload: FetchUserSuccessPayload;
};
export type FetchOrderSuccess = {
    type: typeof reduxActionTypes.FETCH_ORDER_SUCCESS;
    payload: FetchOrderSuccessPayload;
};

export type ReduxActions =
    | FetchUserRequest
    | FetchOrderRequest
    | FetchUserSuccess
    | FetchOrderSuccess
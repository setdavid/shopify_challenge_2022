const SET_APOD_OBJS = "SET_APOD_OBJS";
const CLEAR_APOD_OBJS = "CLEAR_APOD_OBJS";
const SET_DATE_REF = "SET_DATE_REF";
const SET_APODS_STATUS = "SET_APODS_STATUS";
const SET_APODS_STATUS_ERROR = "SET_APODS_STATUS_ERROR";
export const APODS_STATUS_GOOD = "APODS_STATUS_GOOD";
export const APODS_STATUS_LOADING = "APODS_STATUS_LOADING";
export const APODS_STATUS_ERROR = "APODS_STATUS_ERROR";

export const setApodObjs = (apodObjs) => ({
    type: SET_APOD_OBJS,
    payload: {
        apodObjs
    }
});

export const clearApodObjs = () => ({
    type: CLEAR_APOD_OBJS
});

export const setDateRef = (dateRef) => ({
    type: SET_DATE_REF,
    payload: {
        dateRef
    }
});

export const setApodsStatus = (apodsStatus) => ({
    type: SET_APODS_STATUS,
    payload: {
        apodsStatus
    }
});

export const setApodsStatusError = (errMsg) => ({
    type: SET_APODS_STATUS_ERROR,
    payload: {
        errMsg
    }
});

const initialState = {
    apodObjs: [],
    dateRef: new Date(),
    apodsStatus: APODS_STATUS_GOOD,
    errMsg: ""
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_APOD_OBJS:
            return { ...state, apodObjs: action.payload.apodObjs };
        case CLEAR_APOD_OBJS:
            return { ...state, apodObjs: [] };
        case SET_DATE_REF:
            return { ...state, dateRef: action.payload.dateRef };
        case SET_APODS_STATUS:
            return { ...state, apodsStatus: action.payload.apodsStatus };
        case SET_APODS_STATUS_ERROR:
            return { ...state, apodsStatus: APODS_STATUS_ERROR, errMsg: action.payload.errMsg };
        default:
            return state;
    };
};

export default reducer;
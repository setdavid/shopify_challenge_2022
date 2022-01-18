const SET_APOD_OBJS = "SET_APOD_OBJS";
const CLEAR_APOD_OBJS = "CLEAR_APOD_OBJS";
const SET_DATE_REF = "SET_DATE_REF";

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

const initialState = {
    apodObjs: [],
    dateRef: new Date()
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_APOD_OBJS:
            return { ...state, apodObjs: action.payload.apodObjs };
        case CLEAR_APOD_OBJS:
            return { ...state, apodObjs: [] };
        case SET_DATE_REF:
            return { ...state, dateRef: action.payload.dateRef };
        default:
            return state;
    };
};

export default reducer;
const SET_APOD_OBJS = "SET_APOD_OBJS";

export const setApodObjs = (apodObjs) => ({
    type: SET_APOD_OBJS,
    payload: {
        apodObjs
    }
});

const initialState = {
    apodObjs: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_APOD_OBJS:
            return { ...state, apodObjs: action.payload.apodObjs };
        default:
            return state;
    };
};

export default reducer;
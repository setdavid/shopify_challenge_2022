const SET_MODE_IS_MOBILE = "SET_MODE_IS_MOBILE";

export const setModeIsMobile = (modeIsMobile) => ({
    type: SET_MODE_IS_MOBILE,
    payload: {
        modeIsMobile
    }
});

const initialState = {
    modeIsMobile: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MODE_IS_MOBILE:
            return { ...state, modeIsMobile: action.payload.modeIsMobile };
        default:
            return state;
    };
};

export default reducer;
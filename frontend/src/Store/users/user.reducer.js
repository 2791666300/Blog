import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
    users: [],
    currentUser: null,
    isLoding: false,
    error: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case USER_ACTION_TYPES.GET_ALLUSERS_SUCCESS:
            return { ...state, users: payload, isLoding: false }

        case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
        case USER_ACTION_TYPES.UPDATE_CURRENT_SUCCESS:
        case USER_ACTION_TYPES.COLLECTION_SUCCESS:
            return { ...state, currentUser: payload, isLoding: false };
        case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
            return { ...state, currentUser: null }

        case USER_ACTION_TYPES.SIGN_IN_FAILED:
        case USER_ACTION_TYPES.SIGN_OUT_FAILED:
        case USER_ACTION_TYPES.SIGN_UP_FAILED:
        case USER_ACTION_TYPES.UPDATE_CURRENT_FAILED:
        case USER_ACTION_TYPES.UPDATE_CURRENT_PASSWORD_FAILED:
        case USER_ACTION_TYPES.COLLECTION_FAILED:
        case USER_ACTION_TYPES.GET_ALLUSERS_FAILED:
            return {
                ...state,
                error: payload,
                isLoding: false
            };

        default:
            return state
    }
};

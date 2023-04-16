import { GET_USER_DATA, GET_USER_DATA_SUCCESSFUL, GET_USER_DATA_UNSUCCESSFUL } from "./actionType"

export const getUserData = () => {
    return {type : GET_USER_DATA};
}

export const getUserDataSuccessful = (payload) => {
    return {type : GET_USER_DATA_SUCCESSFUL, payload}
}

export const getUserDataUnsuccessful = () => {
    return {type : GET_USER_DATA_UNSUCCESSFUL}
}
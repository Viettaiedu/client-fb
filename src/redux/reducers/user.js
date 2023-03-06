import * as  actionTypes from '../constants/user'; 
const initState = {
    users : [],
    isLoading:true,
    isError:true
}
export const usersReducer = (state = initState , action) => {
        switch(action.type) {
            case actionTypes.GET_USERS_REQUEST :
                return {
                    isLoading:true,
                    users:[]
                }
            case actionTypes.GET_USERS_SUCCESS :
                return {
                    isLoading:false,
                    users:action.payload
                }
            case actionTypes.GET_USERS_FAIL :
                return {
                    isError:true,
                    users:[]
                }
                // case actionTypes.ADD_USER :
                // return {
                //     ...state,
                //     users : [...state.users, action.payload],
                //     isLoading:false
                // }
                // case actionTypes.DELETE_USER :
                // return {
                //     ...state,
                //     users :[...state.users.filter(story => story.id !== action.payload.id)],
                //     isLoading:false
                // }
            default :
            return state;
        }
}

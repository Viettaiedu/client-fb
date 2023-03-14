import * as  actionTypes from '../constants/user'; 
const initUserFriends = {
    userFriends : [],
    isLoading:true,
    isError:true
}
export const userFriendsReducer= (state = initUserFriends , action) => {
        switch(action.type) {
            case actionTypes.GET_USER_FRIENDS_REQUEST :
                return {
                    isLoading:true,
                    userFriends:[]
                }
            case actionTypes.GET_USER_FRIENDS_SUCCESS:
                return {
                    isLoading:false,
                    userFriends:action.payload
                }
            case actionTypes.GET_USER_FRIENDS_FAIL :
                return {
                    isError:true,
                    userFriends:[]
                }
            default :
            return state;
        }
}

const initUserOthers = {
    userOthers : [],
    isLoading:true,
    isError:true
}
export const userOthersReducer= (state = initUserOthers , action) => {
    switch(action.type) {
        case actionTypes.GET_USER_OTHERS_REQUEST :
            return {
                isLoading:true,
                userOthers:[]
            }
        case actionTypes.GET_USER_OTHERS_SUCCESS:
            return {
                isLoading:false,
                userOthers:action.payload
            }
        case actionTypes.GET_USER_OTHERS_FAIL :
            return {
                isError:true,
                userOthers:[]
            }
        default :
        return state;
    }

  

}

const initUserProfile = {
    userProfile : {},
    isLoading:true,
    isError:true
}
export const userProfileReducer= (state = initUserProfile , action) => {
    switch(action.type) {
        case actionTypes.GET_USER_PROFILE_REQUEST :
            return {
                isLoading:true,
                userProfile : {},
            }
        case actionTypes.GET_USER_PROFILE_SUCCESS:
            return {
                isLoading:false,
                userProfile:action.payload
            }
        case actionTypes.GET_USER_PROFILE_FAIL :
            return {
                isError:true,
                userProfile : {},
            }
         case actionTypes.UPDATE_USER_PROFILE : 
         return {
            userProfile : action.payload,
         }
        default :
        return state;
    }

  

}
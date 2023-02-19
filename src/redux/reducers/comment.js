import * as  actionTypes from '../constants/comment'; 
const initState = {
    comments : null,
    isLoading:true,
    isError:true
}
export const commentsReducer = (state = initState, action) => {
        switch(action.type) {
            case actionTypes.GET_COMMENTS_REQUEST :
                return {
                    isLoading:true,
                    comments:[]
                }
            case actionTypes.GET_COMMENTS_SUCCESS :
                return {
                    isLoading:false,
                    comments:action.payload
                }
            case actionTypes.GET_COMMENTS_FAIL :
                return {
                    isError:true,
                    comments:action.payload
                }
                case actionTypes.ADD_COMMENT :
                return {
                    ...state,
                    comments : [...state.comments , action.payload]
                }
            default :
            return state;
        }
}

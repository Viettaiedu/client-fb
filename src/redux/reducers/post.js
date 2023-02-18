import * as  actionTypes from '../constants/post'; 

export const postsReducer = (state = {posts : []} , action) => {
        switch(action.type) {
            case actionTypes.GET_POSTS_REQUEST :
                return {
                    isLoading:true,
                    posts:[]
                }
            case actionTypes.GET_POSTS_SUCCESS :
                return {
                    isLoading:false,
                    posts:action.payload
                }
            case actionTypes.GET_POSTS_FAIL :
                return {
                    isError:true,
                    posts:action.payload
                }
                case actionTypes.ADD_POST :
                return {
                    ...state,
                    posts : [...state.posts , action.payload]
                }
            default :
            return state;
        }
}

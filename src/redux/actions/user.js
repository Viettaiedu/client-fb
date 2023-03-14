import * as actionTypes from '../constants/user';
import httpsRequest from '../../api/axios';
export const getUserFriends =  (id) => async (dispatch) => {
    try {
        dispatch({
            type: actionTypes.GET_USER_FRIENDS_REQUEST,
        })
        const res = await httpsRequest.get('/users/friends?id='+id);
            dispatch({
            type: actionTypes.GET_USER_FRIENDS_SUCCESS,
            payload:res.data 
        })
    }
    catch(e) {
        dispatch({
            type: actionTypes.GET_USER_FRIENDS_FAIL,
        })
    }
}
export const getUserOthers =  (id) => async (dispatch) => {
    try {
        dispatch({
            type: actionTypes.GET_USER_OTHERS_REQUEST,
        })
        const {data} = await httpsRequest.get('/users/others?id='+id);
        dispatch({
            type: actionTypes.GET_USER_OTHERS_SUCCESS,
            payload:data 
        })
    }
    catch(e) {
        dispatch({
            type: actionTypes.GET_USER_OTHERS_FAIL,
        })
    }
}
export const getUserProfile =  (id) => async (dispatch) => {
    try {
        dispatch({
            type: actionTypes.GET_USER_PROFILE_REQUEST,
        })
        const {data} = await httpsRequest.get("/users/find/" + id);
        dispatch({
            type: actionTypes.GET_USER_PROFILE_SUCCESS,
            payload:data 
        })
    }
    catch(e) {
        dispatch({
            type: actionTypes.GET_USER_PROFILE_FAIL,
        })
    }
}



export const updateUser =  (inputs) => async (dispatch) => {
    try {
        const {data} = await httpsRequest.patch("/users/update",   inputs);
        dispatch({
            type: actionTypes.GET_USER_PROFILE_SUCCESS,
            payload:data 
        })
    }
    catch(e) {
        console.log(e);
    }
}


// }
// export const addComment =  (inputs) => async (dispatch) => {
//     try {
//         const { data } = await  httpsRequest.post('/comments',inputs);
//        dispatch({
//         type:actionTypes.ADD_COMMENT,
//         payload : data
//       })
//     }
//     catch(e) {
//         console.log("Error",e);
//     }
// }
// export const deleteComment =  (id) => async (dispatch) => {
//     try {
//        await  httpsRequest.delete('/comments/'+id);
//        dispatch({
//         type:actionTypes.DELETE_COMMENT,
//         payload : {id:id}
//       })
//     }
//     catch(e) {
//         console.log("Error",e);
//     }
// }
// export const updateComment =  (desc,id) => async (dispatch) => {
//     try {
//         await  httpsRequest.put('/comments/' , {desc,id});
//        dispatch({
//         type:actionTypes.UPDATE_COMMENT,
//         payload : {desc,id}
//       })
//     }
//     catch(e) {
//         console.log("Error",e);
//     }
// }
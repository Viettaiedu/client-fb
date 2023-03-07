import * as actionTypes from '../constants/user';
import httpsRequest from '../../api/axios';
export const getUserFriends =  () => async (dispatch) => {
    try {
        dispatch({
            type: actionTypes.GET_USERS_REQUEST,
        })
        const {data} = await httpsRequest.get('/users/friends');
        dispatch({
            type: actionTypes.GET_USERS_SUCCESS,
            payload:data 
        })
    }
    catch(e) {
        dispatch({
            type: actionTypes.GET_USERS_FAIL,
        })
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
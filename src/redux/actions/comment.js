import * as actionTypes from '../constants/comment';
import httpsRequest from '../../api/axios';
export const getComments =  () => async (dispatch) => {
    try {
        dispatch({
            type: actionTypes.GET_COMMENTS_REQUEST,
        })
        const {data} = await httpsRequest.get('/comments');
        dispatch({
            type: actionTypes.GET_COMMENTS_SUCCESS,
            payload:data 
        })
    }
    catch(e) {
        dispatch({
            type: actionTypes.GET_COMMENTS_FAIL,
        })
    }
}
export const addComment =  (inputs) => async (dispatch) => {
    try {
        const { data } = await  httpsRequest.post('/comments',inputs);
       dispatch({
        type:actionTypes.ADD_COMMENT,
        payload : data
      })
    }
    catch(e) {
        console.log("Error",e);
    }
}
import * as actionTypes from '../constants/post';
import httpsRequest from '../../api/axios';
export const getPosts =  () => async (dispatch) => {
    try {
        dispatch({
            type: actionTypes.GET_POSTS_REQUEST,
        })
        const {data} = await httpsRequest.get('/posts');
        dispatch({
            type: actionTypes.GET_POSTS_SUCCESS,
            payload:data 
        })
    }
    catch(e) {
        dispatch({
            type: actionTypes.GET_POSTS_FAIL,
        })
    }
}
export const addPost =  (inputs) => async (dispatch) => {
    try {
        const { data } = await  httpsRequest.post('/posts',inputs);
       dispatch({
        type:actionTypes.ADD_POST,
        payload : data
      })
    }
    catch(e) {
        console.log("Error",e);
    }
}
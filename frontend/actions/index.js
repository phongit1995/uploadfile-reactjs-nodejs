import * as actionTypes from './../containers/actionTypes';
export const addImage = (data)=>{
    return {
        type:actionTypes.ADD_IMAGE,
        data:data
    }
}
export const deleteImage = (id)=>{
    return {
        type:actionTypes.DELETE_IMAGE,
        id:id
    }
}
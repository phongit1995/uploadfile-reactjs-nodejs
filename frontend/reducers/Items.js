import * as ActionType from './../containers/actionTypes';
let listimage = JSON.parse(localStorage.getItem('ListImage'));
let data = listimage? listimage:[];
const ListItems = (state=data,action)=>{

    switch(action.type){
        case ActionType.ADD_IMAGE :
            let result = {
                id:action.data.fileId,
                name:action.data.fileName
            }
            state.push(result);
            localStorage.setItem('ListImage', JSON.stringify([...state]));
            return [...state] ;
        case ActionType.DELETE_IMAGE :
             let resultdelete = state.filter((item)=>{
                return item.id != action.id
            })
            localStorage.setItem('ListImage', JSON.stringify([...resultdelete]));
            return [...resultdelete] ;
        default :
        return [...state]
    }
}
export default ListItems ;
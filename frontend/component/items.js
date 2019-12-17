import React , {Component} from 'react';
import {connect} from 'react-redux';
import * as ActionType from './../actions/index';
class Items extends Component {
    render(){
        let {item} = this.props ;
        return (
        <div className="itemupload">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
                  <img src={`https://drive.google.com/uc?id=${item.id}`} width="100%" height="100px" />
                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                  <div>Tên Ảnh </div>
                  <div> {item.name}</div>
                  <a className="btn" href={`https://drive.google.com/uc?id=${item.id}`} download target="_blank"><i className="fa fa-download" ></i> Download</a>
                  <button className="btn mt-2 btn-warning" onClick={ ()=>this.deleteImage(item.id)} ><i class="fa fa-trash-alt"></i> Delete</button>
                </div>
              </div>
        </div>
        )
    }
    deleteImage = (id)=>{
      let {deleteImages}= this.props ;
        let result = confirm("Bạn Có Chắc Muốn Xóa Không ?");
        if(result){
          deleteImages(id);
        }
    }
}
const mapdispatchToProps = (dispatch,props)=>{
  return {
      deleteImages :(id)=>{
        dispatch(ActionType.deleteImage(id));
      }
  }
}
export default connect(null,mapdispatchToProps)( Items) ;
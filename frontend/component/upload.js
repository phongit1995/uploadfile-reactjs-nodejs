import React , {Component} from 'react';
import axios from 'axios' ;
import * as Action from './../actions/index';
import {connect} from 'react-redux';
class Upload extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="zone">
              <div id="dropZ">
                <i className="fa fa-cloud-upload" />
                <div>Drag and drop your file here</div>                    
                <span>OR</span>
                <div className="selectFile">       
                  <label htmlFor="file">Select file</label>                   
                  <input type="file" name="files" id="file" onChange={this.onChangeFile}/>
                </div>
                <p>File size limit : 10 MB</p>
              </div>
            </div>
          </div>
        )
    }
    onChangeFile=e=>{
        const data = new FormData() ;
        data.append('file', e.target.files[0]);
        let url =`${window.location.href}upload` ;
        axios.post(url,data,{}).then(data=>{
          this.props.onAddImage(data.data);
        }).catch(error=>{
          console.log(error);
        });
    }
}
const dispatchActiontoProps = (dispatch,props)=>{
  return {
    onAddImage: (data)=>{
        dispatch(Action.addImage(data))
    },
    deleteImage :(id)=>{
      dispatch(Action.deleteImage(id))
    }
  }
}
export default connect(null,dispatchActiontoProps)(Upload) ;
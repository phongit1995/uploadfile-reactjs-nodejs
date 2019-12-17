import React , {Component} from 'react';
import {connect} from 'react-redux';
import Items from './items';
class ListItems extends Component {
    constructor(props){
        super(props);
    }
    render(){
        let {Listitems} = this.props ;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <h1 className="listfile">Danh Sách File</h1>
            {this.renContent(Listitems)}
          </div>
        )
    }
    renContent(Listitems){
        let result = null ;
        if(Listitems.length>0){
            result= Listitems.map((item,index)=>{
                return <Items  key={index} item={item}/>
            })
        }
        return result ;
    }
}
const mapStateToProps = state =>{
    return {
        Listitems: state.ListItems
    }
}
export default  connect(mapStateToProps,null)(ListItems) ;